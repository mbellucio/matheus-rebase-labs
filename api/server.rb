# frozen_string_literal: true

require_relative 'medical_exam'
require_relative '../sidekiq/csv_job'
require 'sinatra'
require 'sinatra/cors'
require 'rack/handler/puma'

set :allow_origin, 'http://localhost:1234'
set :allow_methods, 'GET, POST'
set :allow_headers, 'Content-Type, Authorization, Accept, X-Requested-With'

medical_exam = MedicalExam.new(ENV['TABLE_NAME'])

get '/tests' do
  begin
    medical_exam.all.to_json
  rescue PG::Error => e
    status 500
    { error: e.message }.to_json
  end
end

get '/exams' do
  begin
    return medical_exam.find_by_token(params[:token]).to_json if params[:token]

    medical_exam.all.to_json
  rescue PG::Error => e
    status 500
    { error: e.message }.to_json
  end
end

post '/exams' do
  unless params[:file] && (uploaded_file = params[:file][:tempfile]) && (filename = params[:file][:filename])
    status 400
    return {error: 'Nenhum arquivo foi enviado'}.to_json
  end

  p params[:file]

  file_extension = File.extname(filename).downcase
  file_type = params[:file][:type]

  unless file_extension == '.csv' && file_type == 'text/csv'
    status 415
    return {error: 'O arquivo deve ser no formato .csv'}.to_json
  end

  target_directory = './uploads/'
  target_filename = "#{SecureRandom.hex}.csv"
  file_full_path = "#{target_directory}#{target_filename}"
  FileUtils.mkdir_p(target_directory)

  File.open(file_full_path, 'wb') do |file|
    file.write(uploaded_file.read)
  end

  unless medical_exam.csv_is_valid?(file_full_path)
    status 422
    return {error: "O arquivo deve conter dados válidos"}.to_json
  end

  CsvJob.perform_async(file_full_path, ENV['TABLE_NAME'])

  {message: "Success"}.to_json
end


unless ENV['RACK_ENV'] == 'test'
  Rack::Handler::Puma.run(
    Sinatra::Application,
    Port: 3000,
    Host: '0.0.0.0'
  )
end

# frozen_string_literal: true

require_relative 'medical_exam'
require_relative '../sidekiq/csv_job'
require 'sinatra'
require 'sinatra/cors'
require 'rack/handler/puma'

set :allow_origin, 'http://localhost:1234'
set :allow_methods, 'GET, POST'
set :allow_headers, 'Content-Type, Authorization, Accept, X-Requested-With'

medical_exam = MedicalExam.new('medical_exams')

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
  CsvJob.perform_async("./test.csv")
  {message: "Sucess"}.to_json
end

Rack::Handler::Puma.run(
  Sinatra::Application,
  Port: 3000,
  Host: '0.0.0.0'
)

# frozen_string_literal: true

require_relative 'medical_exam'
require 'sinatra'
require 'sinatra/cors'
require 'rack/handler/puma'

set :allow_origin, 'http://localhost:1234'
set :allow_methods, 'GET'
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
    medical_exam.all.to_json
  rescue PG::Error => e
    status 500
    { error: e.message }.to_json
  end
end

Rack::Handler::Puma.run(
  Sinatra::Application,
  Port: 3000,
  Host: '0.0.0.0'
)

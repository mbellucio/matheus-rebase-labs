# frozen_string_literal: true

require_relative 'medical_exam'
require 'sinatra'
require 'rack/handler/puma'

get '/tests' do
  begin
    MedicalExam.all
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

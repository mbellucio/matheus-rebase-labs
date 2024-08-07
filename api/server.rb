# frozen_string_literal: true

require 'sinatra'
require 'rack/handler/puma'
require 'pg'

conn = PG.connect(host: 'postgres_db', dbname: 'labsdb', user: 'admin', password: 'railsdbmigrate')

get '/tests' do
  begin
    result = conn.exec('SELECT * FROM medical_exams_view')
    result.map { |row| row }.to_json
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

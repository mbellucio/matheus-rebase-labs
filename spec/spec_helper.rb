require 'rack/test'
require 'rspec'
require 'sinatra/base'
require_relative '../api/server'

module RSpecMixin
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end
end

RSpec.configure do |config|
  config.include RSpecMixin
end

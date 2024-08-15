require 'rack/test'
require_relative '../api/server'

sleep(1)

module RSpecMixin
  def app
    Sinatra::Application
  end
end

RSpec.configure do |config|
  config.include Rack::Test::Methods
  config.include RSpecMixin
end

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.shared_context_metadata_behavior = :apply_to_host_groups
end

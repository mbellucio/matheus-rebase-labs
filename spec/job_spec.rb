require 'spec_helper'
require_relative '../sidekiq/csv_job'

describe 'CsvJob' do

  before(:each) do
    @medical_exam = MedicalExam.new(ENV['TABLE_NAME'])
    @medical_exam.clear
  end

  after(:each) do
    @medical_exam.clear
  end

  it 'and job perform as intended' do
    CsvJob.perform_async("./spec/support/data.csv", ENV['TABLE_NAME'])

    sleep(1)
    result = @medical_exam.all

    expect(result.length).to eq 4
  end
end

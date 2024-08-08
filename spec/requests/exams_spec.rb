require 'spec_helper'
require_relative '../../api/medical_exam'

describe '/tests' do
  it 'Return all medical exams' do
    data = File.read('spec/support/json/exams.json')
    response = double('response', status: 200, body: data)

    allow(MedicalExam).to receive(:all).and_return(response)

    get '/tests'

    expect(last_response).to be_ok
    json_response = JSON.parse(last_response.body)

    expect(json_response.length).to eq(2)
    expect(json_response[0]['cpf']).to eq('123123')
    expect(json_response[1]['cpf']).to eq('8912738')
  end
end

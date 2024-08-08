require 'spec_helper'
require_relative '../../api/medical_exam'

describe '/tests' do
  it 'Return all medical exams' do
    data = File.read('spec/support/json/exams.json')
    response = double('response', status: 200, body: data)

    allow(MedicalExam).to receive(:all).and_return(response)

    get '/tests'

    expect(response.status).to eq 200
    json_response = JSON.parse(response.body)

    expect(json_response.length).to eq(3)
    expect(json_response[0]['cpf']).to eq('048.973.170-88')
    expect(json_response[1]['cpf']).to eq('048.973.170-88')
    expect(json_response[2]['cpf']).to eq('048.973.170-88')

    expect(json_response[0]['exam_type']).to eq('hemácias')
    expect(json_response[1]['exam_type']).to eq('leucócitos')
    expect(json_response[2]['exam_type']).to eq('plaquetas')

    expect(json_response[0]['exam_result']).to eq('97')
    expect(json_response[1]['exam_result']).to eq('89')
    expect(json_response[2]['exam_result']).to eq('97')
  end
end

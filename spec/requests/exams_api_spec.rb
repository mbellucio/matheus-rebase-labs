require 'spec_helper'

describe 'Exams API' do

  before(:each) do
    @medical_exam = MedicalExam.new(ENV['TABLE_NAME'])
  end

  after(:each) do
    @medical_exam.clear
  end

  context 'GET /exams?token=:token' do
    it 'return a detailed exam response by token' do
      @medical_exam.create(cpf: '12312312', patient_name: 'name 1', patient_mail: 'mail1@mail.com',
                           patient_birthdate: '01-01-01', patient_adress: 'adress 1', patient_city: 'city 1',
                           patient_state: 'hh', medic_crm: '6149124', medic_crm_state: 'jj', medic_name: 'medic 1',
                           medic_mail: 'medic1@mail.com', exam_token: 'IQCZ17', exam_date: '02-02-02',
                           exam_type: 'type 1', exam_type_range: '1-10', exam_result: '7')

      @medical_exam.create(cpf: '12312312', patient_name: 'name 1', patient_mail: 'mail1@mail.com',
                           patient_birthdate: '01-01-01', patient_adress: 'adress 1', patient_city: 'city 1',
                           patient_state: 'hh', medic_crm: '6149124', medic_crm_state: 'jj', medic_name: 'medic 1',
                           medic_mail: 'medic1@mail.com', exam_token: 'IQCZ17', exam_date: '02-02-02',
                           exam_type: 'type 2', exam_type_range: '1-20', exam_result: '17')

      get '/exams?token=IQCZ17'

      expect(last_response.status).to eq 200
      json = JSON.parse(last_response.body)
      expect(json['cpf']).to eq '12312312'
      expect(json['patient_name']).to eq 'name 1'
      expect(json['medic']['medic_name']).to eq 'medic 1'
      expect(json['exams'].length).to eq 2
      expect(json['exams'][0]['exam_result']).to eq '7'
      expect(json['exams'][1]['exam_result']).to eq '17'
    end

    it 'return feedback when token is not linked to any exam' do
      get '/exams?token=IQCZ17'

      json = JSON.parse(last_response.body)
      expect(json['error']).to eq 'Não foi possível encontrar nenhum exame com este token'
    end
  end

  context 'GET /exams' do
    it 'return all exams' do
      @medical_exam.create(cpf: '12312312', patient_name: 'name 1', patient_mail: 'mail1@mail.com',
                           patient_birthdate: '01-01-01', patient_adress: 'adress 1', patient_city: 'city 1',
                           patient_state: 'hh', medic_crm: '6149124', medic_crm_state: 'jj', medic_name: 'medic 1',
                           medic_mail: 'medic1@mail.com', exam_token: 'IQCZ17', exam_date: '02-02-02',
                           exam_type: 'type 1', exam_type_range: '1-10', exam_result: '7')

      @medical_exam.create(cpf: '12312312', patient_name: 'name 1', patient_mail: 'mail1@mail.com',
                           patient_birthdate: '01-01-01', patient_adress: 'adress 1', patient_city: 'city 1',
                           patient_state: 'hh', medic_crm: '6149124', medic_crm_state: 'jj', medic_name: 'medic 1',
                           medic_mail: 'medic1@mail.com', exam_token: 'IQCZ17', exam_date: '02-02-02',
                           exam_type: 'type 2', exam_type_range: '1-20', exam_result: '17')

      get '/exams'

      json = JSON.parse(last_response.body)

      expect(json.length).to eq 2
      expect(json[0]['exam_result']).to eq '7'
      expect(json[1]['exam_result']).to eq '17'
    end
  end

  context 'POST /exams' do
    it 'successfully post a csv and updates database' do
      csv_file = Rack::Test::UploadedFile.new('./spec/support/data.csv', 'text/csv')

      post '/exams', 'file' => csv_file

      expect(last_response.status).to eq(200)
    end

    it 'return 415 if file type is not csv' do
      img_file = Rack::Test::UploadedFile.new('./spec/support/image.jpg', 'image')

      post '/exams', 'file' => img_file

      expect(last_response.status).to eq(415)
    end
  end

end

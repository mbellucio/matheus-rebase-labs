require 'spec_helper'
require_relative '../../api/medical_exam'

describe 'MedicalExam' do
  before(:each) do
    @medical_exam = MedicalExam.new(ENV['TABLE_NAME'])
    @medical_exam.clear
  end

  after(:each) do
    @medical_exam.clear
  end

  context '.clear' do
    it 'return nothing if cleared' do
      @medical_exam.create(cpf: '12312312', patient_name: 'name 1', patient_mail: 'mail1@mail.com',
                            patient_birthdate: '01-01-01', patient_adress: 'adress 1', patient_city: 'city 1',
                            patient_state: 'hh', medic_crm: '6149124', medic_crm_state: 'jj', medic_name: 'medic 1',
                            medic_mail: 'medic1@mail.com', exam_token: 'das782163w', exam_date: '02-02-02',
                            exam_type: 'type 1', exam_type_range: '1-10', exam_result: '7')

      @medical_exam.clear
      result = @medical_exam.all

      expect(result.length).to eq 0
    end
  end

  context '.all && .create' do
    it 'Return all exams' do
      @medical_exam.create(cpf: '12312312', patient_name: 'name 1', patient_mail: 'mail1@mail.com',
                           patient_birthdate: '01-01-01', patient_adress: 'adress 1', patient_city: 'city 1',
                           patient_state: 'hh', medic_crm: '6149124', medic_crm_state: 'jj', medic_name: 'medic 1',
                           medic_mail: 'medic1@mail.com', exam_token: 'das782163w', exam_date: '02-02-02',
                           exam_type: 'type 1', exam_type_range: '1-10', exam_result: '7')

      @medical_exam.create(cpf: '736487123', patient_name: 'name 2', patient_mail: 'mail2@mail.com',
                           patient_birthdate: '03-03-03', patient_adress: 'adress 2', patient_city: 'city 2',
                           patient_state: 'll', medic_crm: '656711', medic_crm_state: 'll', medic_name: 'medic 2',
                           medic_mail: 'medic2@mail.com', exam_token: 'ghsdg63268bd', exam_date: '04-04-04',
                           exam_type: 'type 2', exam_type_range: '1-20', exam_result: '15')

      result = @medical_exam.all

      expect(result.length).to eq 2

      expect(result[0]['cpf']).to eq '12312312'
      expect(result[0]['exam_token']).to eq 'das782163w'
      expect(result[0]['exam_type']).to eq 'type 1'
      expect(result[0]['exam_result']).to eq '7'

      expect(result[1]['cpf']).to eq '736487123'
      expect(result[1]['exam_token']).to eq 'ghsdg63268bd'
      expect(result[1]['exam_type']).to eq 'type 2'
      expect(result[1]['exam_result']).to eq '15'
    end
  end

  context '.find_by_token' do
    it 'Return all exams by token' do
      @medical_exam.create(cpf: '12312312', patient_name: 'name 1', patient_mail: 'mail1@mail.com',
                           patient_birthdate: '01-01-01', patient_adress: 'adress 1', patient_city: 'city 1',
                           patient_state: 'hh', medic_crm: '6149124', medic_crm_state: 'jj', medic_name: 'medic 1',
                           medic_mail: 'medic1@mail.com', exam_token: 'das782163w', exam_date: '02-02-02',
                           exam_type: 'type 1', exam_type_range: '1-10', exam_result: '7')

      @medical_exam.create(cpf: '736487123', patient_name: 'name 2', patient_mail: 'mail2@mail.com',
                           patient_birthdate: '03-03-03', patient_adress: 'adress 2', patient_city: 'city 2',
                           patient_state: 'll', medic_crm: '656711', medic_crm_state: 'll', medic_name: 'medic 2',
                           medic_mail: 'medic2@mail.com', exam_token: 'ghsdg63268bd', exam_date: '04-04-04',
                           exam_type: 'type 2', exam_type_range: '1-20', exam_result: '15')

      @medical_exam.create(cpf: '12312312', patient_name: 'name 1', patient_mail: 'mail1@mail.com',
                           patient_birthdate: '01-01-01', patient_adress: 'adress 1', patient_city: 'city 1',
                           patient_state: 'hh', medic_crm: '6149124', medic_crm_state: 'jj', medic_name: 'medic 1',
                           medic_mail: 'medic1@mail.com', exam_token: 'das782163w', exam_date: '02-02-02',
                           exam_type: 'type 3', exam_type_range: '1-99', exam_result: '97')

      result = @medical_exam.find_by_token('das782163w')

      expect(result[:cpf]).to eq '12312312'
      expect(result[:exam_token]).to eq 'das782163w'

      expect(result[:medic][:medic_crm]).to eq '6149124'
      expect(result[:medic][:medic_crm_state]).to eq 'jj'
      expect(result[:medic][:medic_name]).to eq 'medic 1'

      expect(result[:exams].length).to eq 2
      expect(result[:exams][0][:exam_type]).to eq 'type 1'
      expect(result[:exams][1][:exam_type]).to eq 'type 3'
    end
  end

  context '.populate_from_csv' do
    it 'populate database from a csv file' do
      @medical_exam.populate_from_csv("./spec/support/data.csv")

      result = @medical_exam.all

      expect(result.length).to eq 4
    end
  end

  context '.csv_is_valid?' do
    it 'returns true when csv is valid' do
      result = @medical_exam.csv_is_valid?("./spec/support/data.csv")

      expect(result).to be true
    end

    it 'returns false when csv is invalid' do
      result = @medical_exam.csv_is_valid?("./spec/support/invalid_data.csv")

      expect(result).to be false
    end
  end
end

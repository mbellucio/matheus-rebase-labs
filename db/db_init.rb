# frozen_string_literal: true

require 'csv'
require 'pg'
require_relative '../api/medical_exam.rb'

conn = PG.connect(host: 'postgres_db', dbname: 'labsdb', user: 'admin', password: 'railsdbmigrate')
conn.exec("
  CREATE TABLE IF NOT EXISTS medical_exams (
    exam_id SERIAL PRIMARY KEY,
    cpf VARCHAR (50) NOT NULL,
    patient_name VARCHAR (50) NOT NULL,
    patient_mail VARCHAR (50) NOT NULL,
    patient_birthdate TIMESTAMP NOT NULL,
    patient_adress VARCHAR (100) NOT NULL,
    patient_city VARCHAR (50) NOT NULL,
    patient_state VARCHAR (50) NOT NULL,
    medic_crm VARCHAR (50) NOT NULL,
    medic_crm_state VARCHAR (2) NOT NULL,
    medic_name VARCHAR (50) NOT NULL,
    medic_mail VARCHAR (50) NOT NULL,
    exam_token VARCHAR (50) NOT NULL,
    exam_date TIMESTAMP NOT NULL,
    exam_type VARCHAR (50) NOT NULL,
    exam_type_range VARCHAR (50) NOT NULL,
    exam_result VARCHAR (10) NOT NULL
  )
")

conn.exec("CREATE TABLE medical_exams_test AS SELECT * FROM medical_exams LIMIT 0;")

medical_exam = MedicalExam.new('medical_exams')
medical_exam.populate_from_csv('./db/data.csv')

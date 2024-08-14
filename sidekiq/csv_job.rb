require 'sidekiq'
require './api/medical_exam'

class CsvJob
  include Sidekiq::Job

  def perform(file_path)
    medical_exam = MedicalExam.new('medical_exams')
    medical_exam.populate_from_csv(file_path)
  end

end

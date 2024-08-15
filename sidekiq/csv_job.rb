require 'sidekiq'
require './api/medical_exam'
require 'fileutils'

class CsvJob
  include Sidekiq::Job

  def perform(file_path, table_name='medical_exam')
    medical_exam = MedicalExam.new(table_name)
    medical_exam.populate_from_csv(file_path)
    FileUtils.rm_rf(file_path)
  end

end

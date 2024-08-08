require 'pg'

class MedicalExam
  def initialize
    @conn = PG.connect(host: 'postgres_db', dbname: 'labsdb', user: 'admin', password: 'railsdbmigrate')
  end

  def all
    result = @conn.exec("SELECT * FROM medical_exams")
    result.map { |row| row }.to_json
  end

  def self.all
    new.all
  end
end

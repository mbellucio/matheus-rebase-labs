require 'pg'
require 'csv'

class MedicalExam
  def initialize(table_name)
    @table_name = table_name
    @conn = PG.connect(host: 'postgres_db', dbname: 'labsdb', user: 'admin', password: 'railsdbmigrate')
  end

  def all
    result = @conn.exec("SELECT * FROM #{@table_name}")
    result.map { |row| row }
  end

  def create(cpf:, patient_name:, patient_mail:, patient_birthdate:, patient_adress:, patient_city:, patient_state:,
    medic_crm:, medic_crm_state:, medic_name:, medic_mail:, exam_token:, exam_date:, exam_type:,
    exam_type_range:, exam_result:)

    @conn.exec("
      INSERT INTO #{@table_name} (cpf, patient_name, patient_mail, patient_birthdate, patient_adress,
                                  patient_city, patient_state, medic_crm, medic_crm_state, medic_name, medic_mail,
                                  exam_token, exam_date, exam_type, exam_type_range, exam_result)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)",
      [cpf, patient_name, patient_mail, patient_birthdate, patient_adress, patient_city, patient_state, medic_crm,
       medic_crm_state, medic_name, medic_mail, exam_token, exam_date, exam_type, exam_type_range, exam_result])
  end

  def find_by_token(token)
    exams = @conn.exec("SELECT * FROM #{@table_name} WHERE exam_token = $1", [token]).to_a

    if exams.empty?
      return {error: 'Não foi possível encontrar nenhum exame com este token'}
    end

    result = {
      exam_token: exams[0]['exam_token'],
      exam_date: exams[0]['exam_date'],
      cpf: exams[0]['cpf'],
      patient_name: exams[0]['patient_name'],
      patient_mail: exams[0]['patient_mail'],
      patient_birthdate: exams[0]['patient_birthdate'],
      medic: {
        medic_crm: exams[0]['medic_crm'],
        medic_crm_state: exams[0]['medic_crm_state'],
        medic_name: exams[0]['medic_name'],
      },
      exams: []
    }

    exams.each do |exam|
      result[:exams] << {
        exam_type: exam['exam_type'],
        exam_type_range: exam['exam_type_range'],
        exam_result: exam['exam_result']
      }
    end
    result
  end

  def populate_from_csv(file_path)
    rows = CSV.read(file_path, col_sep: ';')
    rows.shift

    rows.each do |row|
      @conn.exec("
        INSERT INTO #{@table_name} (
        cpf, patient_name, patient_mail, patient_birthdate,
        patient_adress, patient_city, patient_state, medic_crm,
        medic_crm_state, medic_name, medic_mail, exam_token, exam_date,
        exam_type, exam_type_range, exam_result)
        VALUES  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
      ", row)
    end
  end

  def csv_is_valid?(file_path)
    valid_headers = self.get_valid_csv_headers
    rows = CSV.read(file_path, col_sep: ';')

    return false unless rows.first.length == valid_headers.length

    rows.first.all? { |header| valid_headers.include?(header) }
  end

  def clear
    @conn.exec("TRUNCATE TABLE #{@table_name}")
  end

  private

  def get_valid_csv_headers
    rows = CSV.read("./db/data.csv", col_sep: ';')
    rows.first
  end

end

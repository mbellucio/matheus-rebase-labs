require 'pg'

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

  def clear
    @conn.exec("TRUNCATE TABLE #{@table_name}")
  end

end

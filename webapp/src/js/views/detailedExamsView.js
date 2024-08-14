import View from "./View.js";

class PaginationView extends View {
  section = document.querySelector("#detailed-exams-section");
  _parentElement = document.querySelector("#detailed-exams");
  _examResults = document.querySelector("#exam-results");
  _data;

  renderExam(data) {
    this._data = data;
    console.log(data)
    this.clear();

    this._parentElement.insertAdjacentHTML(
      "beforeEnd",
      this._generateInfoMarkup(this._data)
    );

    this._data.exams.forEach((result) => {
      this._examResults.insertAdjacentHTML(
        "beforeEnd",
        this._generateResultsMarkup(result)
      );
    });
  }

  _generateInfoMarkup(data) {
    return `
      <h3 class="text-center mt-2">Resultado dos exames - #${
        data.exam_token
      }</h3>
      <hr>
      <h5 class="text-center">Data: ${data.exam_date.split(" ")[0]}</h5>
      <div class="d-flex px-3 py-2">
        <div class="container col-5 align-self-start border rounded-4 p-3">
          <p><strong>Nome:</strong> ${data.patient_name}</p>
          <p><strong>CPF:</strong> ${data.cpf}</p>
          <p><strong>Data de Nascimento:</strong> ${data.patient_birthdate.split(" ")[0]}</p>
          <p><strong>E-mail:</strong> ${data.patient_mail}</p>
        </div>
        <div class="container col-5 border rounded-4 p-3">
          <p><strong>Médico:</strong> ${data.medic.medic_name}</p>
          <p><strong>CRM:</strong> ${data.medic.medic_crm}/${data.medic.medic_crm_state}</p>
        </div>
      </div>
      <hr>
      
    `;
  }

  _generateResultsMarkup(result) {
    return `
      <div class="text-center col-3 border rounded-4 p-3 me-4 mb-3">
        <strong>${result.exam_type}</strong>
        <hr>
        <p>Intervalo do resultado: ${result.exam_type_range}</p>
        <p>Resultado: <strong>${result.exam_result}</strong></p>
      </div>
    `;
  }
}

export default new PaginationView();

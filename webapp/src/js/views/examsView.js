import View from "./View.js";

class ExamsView extends View {
  section = document.querySelector("#exams-section")
  _parentElement = document.querySelector("#exams");
  _alertElement = document.querySelector("#alert");
  errorMsg = "Não foi possível carregar os exames"

  renderList(data) {
    this._data = data;
    this.clear();

    this._data.forEach((exam) => {
      this._parentElement.insertAdjacentHTML(
        "beforeEnd",
        this._generateMarkup(exam)
      );
    });
  }

  _generateMarkup(exam) {
    return `
      <tr>
        <th scope="row">${exam.exam_token}</th>
        <td>${exam.patient_name}</td>
        <td>${exam.medic_name}</td>
        <td>${exam.exam_type}</td>
      </tr>
    `;
  }
}

export default new ExamsView();

class ExamsView {
  #parentElement = document.querySelector("#exams");
  #data;

  renderList(data) {
    this.#data = data;
    this.#clear();

    this.#data.forEach((exam) => {
      this.#parentElement.insertAdjacentHTML(
        "afterBegin",
        this.#generateMarkup(exam)
      );
    });
  }

  renderSpinner = function () {
    const markup = `
      <div class="loading"></div>
    `;
    this.#parentElement.innerHTML = "";
    this.#parentElement.insertAdjacentHTML("afterBegin", markup);
  };

  #clear() {
    this.#parentElement.innerHTML = "";
  }

  #generateMarkup(exam) {
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

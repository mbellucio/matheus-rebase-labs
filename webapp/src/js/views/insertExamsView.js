import View from "./View.js";

class InsertExamsView extends View {
  section = document.querySelector("#insert-exams-section");
  _parentElement = document.querySelector("#insert-exams");
  errorMsg = "Houve uma falha ao enviar o arquivo.";

  addHandlerUpload(handler) {
    this._parentElement.addEventListener("submit", function (event) {
      event.preventDefault();
      const data = new FormData(this);
      handler(data);
    });
  }
}

export default new InsertExamsView();

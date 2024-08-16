import View from "./View.js";

class ExamsView extends View {
  _parentElement = document.querySelector("#token-search");
  _queryInput = document.querySelector("#search-input");
  _notFound = document.querySelector("#not-found");

  getToken() {
    return this._queryInput.value;
  }

  clearInput() {
    this._queryInput.value = "";
  }

  renderNotFound() {
    this._notFound.innerHTML =
      "Não foi possível encontrar um exame com este token";
  }

  clearNotFound() {
    this._notFound.innerHTML = "";
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", function (event) {
      event.preventDefault();
      handler();
    });
  }
}

export default new ExamsView();

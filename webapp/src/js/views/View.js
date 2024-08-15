export default class View {
  section;
  _parentElement;
  _alertElement = document.querySelector("#alert");
  _data;

  clear() {
    this._parentElement.innerHTML = "";
  }

  hide() {
    if (this.section.classList.contains("hidden")) return;

    this.section.classList.add("hidden");
  }

  show() {
    this.clearError();
    if (this.section.classList.contains("hidden")) {
      return this.section.classList.remove("hidden");
    }
  }

  render(data) {
    this._data = data;
    this.clear();
    this.clearError();
    this._parentElement.insertAdjacentHTML("beforeEnd", this._generateMarkup());
  }

  renderSpinner() {
    const markup = `
      <div class="loading"></div>
    `;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterBegin", markup);
  }

  renderError(error, msg) {
    const markup = `<span>${msg} => (${error})</span>`;

    this.clearError();
    this._alertElement.classList.remove("hidden");
    this._alertElement.insertAdjacentHTML("afterBegin", markup);
  }

  clearError() {
    this._alertElement.classList.add("hidden");
    this._alertElement.innerHTML = "";
  }
}

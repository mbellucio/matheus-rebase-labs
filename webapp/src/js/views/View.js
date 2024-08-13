export default class View {
  section;
  _parentElement;
  _alertElement;
  _data;

  clear() {
    this._parentElement.innerHTML = "";
  }

  hide() {
    if (this.section.classList.contains("hidden")) return;

    this.section.classList.add("hidden");
  }

  show() {
    if (this.section.classList.contains("hidden")) {
      return this.section.classList.remove("hidden");
    }
  }

  render(data) {
    this._data = data;
    this.clear();

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

    this._alertElement.innerHTML = "";
    this._alertElement.insertAdjacentHTML("afterBegin", markup);
  }
}

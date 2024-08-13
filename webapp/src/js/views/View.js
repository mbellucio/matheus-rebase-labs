export default class View {
  _parentElement;
  _alertElement;
  _data;

  clear() {
    this._parentElement.innerHTML = "";
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

  renderError(error) {
    const markup = `<span>Não foi possível carregar os exames => (${error})</span>`;

    this._alertElement.innerHTML = "";
    this._alertElement.insertAdjacentHTML("afterBegin", markup);
  }
}

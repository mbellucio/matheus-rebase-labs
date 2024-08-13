import View from "./View.js";

class PaginationView extends View {
  _parentElement = document.querySelector("#pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (event) {
      const button = event.target.closest(".btn");

      if (!button) return;

      const gotoPage = +button.dataset.goto;
      handler(gotoPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.exams.length / this._data.pagination.resultsPerPage
    );

    if (this._data.pagination.page === 1 && numPages > 1) {
      return `
      <strong class="fs-5 me-3">${this._data.pagination.page}</strong>
      <span class="text-muted me-3">${this._data.pagination.page + 1}</span>
      <button data-goto=${this._data.pagination.page + 1} class="btn btn-outline-dark">Próximo</button>
      `;
    }

    if (this._data.pagination.page === numPages && numPages > 1) {
      return `
      <button data-goto=${this._data.pagination.page - 1} class="btn btn-outline-dark me-3">Anterior</button>
      <span class="text-muted me-3">${this._data.pagination.page - 1}</span>
      <strong class="fs-5">${this._data.pagination.page}</strong>
      `;
    }

    if (this._data.pagination.page < numPages) {
      return `
      <button data-goto=${this._data.pagination.page - 1} class="btn btn-outline-dark me-3">Anterior</button>
      <span class="text-muted me-3">${this._data.pagination.page - 1}</span>
      <strong class="fs-5 me-3">${this._data.pagination.page}</strong>
      <span class="text-muted me-3">${this._data.pagination.page + 1}</span>
      <button data-goto=${this._data.pagination.page + 1} class="btn btn-outline-dark">Próximo</button>
      `;
    }

    return `<strong class="fs-5">${this._data.pagination.page}</strong>`;
  }
}

export default new PaginationView();

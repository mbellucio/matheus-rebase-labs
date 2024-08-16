import View from "./View.js";
import { WEBAPP_URL } from "../config.js";

class NavbarView extends View {
  _examsButton = document.querySelector("#nav-exams-button");
  _insertExamsButton = document.querySelector("#nav-insert-exams-button")
  _mainPageRedirectButton = document.querySelector("#main-page");

  addHandlerExamsClick(handler) {
    this._examsButton.addEventListener("click", function () {
      handler();
    });
  }

  addHandlerInsertExamsClick(handler) {
    this._insertExamsButton.addEventListener("click", function () {
      handler()
    })
  }

  createRedirectButton() {
    this._mainPageRedirectButton.href = WEBAPP_URL;
  }
}

export default new NavbarView();

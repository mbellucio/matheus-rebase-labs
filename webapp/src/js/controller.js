import * as model from "./model.js";
import examsView from "./views/examsView.js";
import paginationView from "./views/paginationView.js";

const controlExams = async function () {
  try {
    examsView.renderSpinner();

    await model.loadExams();

    examsView.renderList(model.getExamsPage());
    paginationView.render(model.state);
  } catch (error) {
    examsView.clear();
    examsView.renderError(error);
  }
};

const controlPagination = function (gotoPage) {
  examsView.renderList(model.getExamsPage(gotoPage));
  paginationView.render(model.state);
};

const init = function () {
  controlExams();
  controlPagination();
  paginationView.addHandlerClick(controlPagination);
};

init();

import * as model from "./model.js";
import examsView from "./views/examsView.js";
import paginationView from "./views/paginationView.js";
import tokenSearchView from "./views/tokenSearchView.js";

const controlExams = async function () {
  try {
    examsView.renderSpinner();

    await model.loadExams();

    examsView.renderList(model.getExamsPage());
    paginationView.render(model.state);
  } catch (error) {
    examsView.clear();
    examsView.renderError(error, examsView.error_msg);
  }
};

const controlTokenSearch = async function () {
  try {
    const token = tokenSearchView.getToken();
    if (!token) return;

    await model.loadDetailedExams(token);

    if (model.state.tokenSearch.detailedExam.error) {
      tokenSearchView.renderNotFound();
    }

  } catch (error) {
    console.log(error);
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
  tokenSearchView.addHandlerSearch(controlTokenSearch);
};

init();

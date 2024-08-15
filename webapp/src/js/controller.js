import * as model from "./model.js";
import examsView from "./views/examsView.js";
import paginationView from "./views/paginationView.js";
import tokenSearchView from "./views/tokenSearchView.js";
import detailedExamsView from "./views/detailedExamsView.js";
import navbarView from "./views/navbarView.js";
import insertExamsView from "./views/insertExamsView.js";
import insertSuccessView from "./views/insertSuccessView.js";

const controlExams = async function () {
  try {
    examsView.renderSpinner();

    await model.loadExams();

    examsView.renderList(model.getExamsPage());
    paginationView.render(model.state);
  } catch (error) {
    examsView.clear();
    examsView.renderError(error, examsView.errorMsg);
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

    detailedExamsView.renderExam(model.state.tokenSearch.detailedExam);
    tokenSearchView.clearInput(detailedExamsView.section, examsView.section);
    detailedExamsView.show();
    examsView.hide();
    insertExamsView.hide();
    insertSuccessView.hide();
  } catch (error) {
    console.log(error);
  }
};

const controlInsertExams = async function (data) {
  console.log(data);
  try {
    await model.postExams(data);
    insertExamsView.hide();
    insertSuccessView.show();
  } catch (error) {
    insertExamsView.renderError(error, insertExamsView.errorMsg);
  }
};

const controlNavbarExams = function () {
  examsView.show();
  detailedExamsView.hide();
  insertExamsView.hide();
};

const controlNavbarInsertExams = function () {
  insertExamsView.show();
  examsView.hide();
  detailedExamsView.hide();
};

const controlPagination = function (gotoPage) {
  examsView.renderList(model.getExamsPage(gotoPage));
  paginationView.render(model.state);
};

const init = function () {
  controlPagination();
  navbarView.createRedirectButton();
  paginationView.addHandlerClick(controlPagination);
  tokenSearchView.addHandlerSearch(controlTokenSearch);
  navbarView.addHandlerExamsClick(controlNavbarExams);
  navbarView.addHandlerInsertExamsClick(controlNavbarInsertExams);
  insertExamsView.addHandlerUpload(controlInsertExams);
  controlExams();
};

init();

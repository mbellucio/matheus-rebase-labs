import * as model from "./model.js";
import examsView from "./views/examsView.js";

const controlExams = async function () {
  try {
    examsView.renderSpinner();

    await model.loadExams();

    examsView.renderList(model.state.exams);
  } catch (error) {
    alert(error);
  }
};

controlExams();

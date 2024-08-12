import { API_URL } from "./config";
import { getJSON } from "./helper";

export const state = {
  exams: [],
};

export const loadExams = async function () {
  try {
    const data = await getJSON(API_URL);

    data.forEach((exam) => {
      state.exams.push(exam);
    });
  } catch (error) {
    alert(error);
  }
};

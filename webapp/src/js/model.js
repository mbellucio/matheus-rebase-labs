import { API_URL, RESULTS_PER_PAGE } from "./config";
import { getJSON } from "./helper";

export const state = {
  exams: [],
  pagination: {
    resultsPerPage: RESULTS_PER_PAGE,
    page: 1,
  },
  tokenSearch: {
    detailedExam: {},
    token: "",
  },
};

export const loadExams = async function () {
  try {
    const data = await getJSON(API_URL);

    data.forEach((exam) => {
      state.exams.push(exam);
    });
  } catch (error) {
    throw error;
  }
};

export const getExamsPage = function (page = state.pagination.page) {
  state.pagination.page = page;

  const start = (page - 1) * state.pagination.resultsPerPage;
  const end = page * state.pagination.resultsPerPage;
  return state.exams.slice(start, end);
};

export const loadDetailedExams = async function (token) {
  try {
    const data = await getJSON(`${API_URL}?token=${token}`);
    state.tokenSearch.token = token;
    state.tokenSearch.detailedExam = data;
  } catch (error) {
    throw error;
  }
};

export const postExams = async function (data) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: data,
    });

    data = await response.json();
    console.log(data);
    if (!response.ok) throw new Error("Upload failed");
  } catch (error) {
    throw error;
  }
};

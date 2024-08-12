const examsSection = document.querySelector("#exams");

const renderSpinner = function (parentElem) {
  const markup = `
    <div class="loading"></div>
  `;
  parentElem.innerHTML = "";
  parentElem.insertAdjacentHTML("afterBegin", markup);
};

const getExams = async function () {
  try {
    renderSpinner(examsSection);

    const response = await fetch("http://localhost:3000/exams");
    const data = await response.json();
    if (!response.ok) throw new Error(`${data.message} (${response.status})`);

    const markup = (exam) => `
      <div id="exam" class="d-flex my-2 justify-content-center align-items-center shadow border rounded-3">
        <p class="me-2">${exam.exam_token}</p>
        <p class="me-2">${exam.patient_name}</p>
        <p>${exam.medic_name}</p>
      </div>
    `;

    examsSection.innerHTML = "";
    data.forEach((exam) => {
      examsSection.insertAdjacentHTML("afterBegin", markup(exam));
    });
  } catch (error) {
    alert(error);
  }
};

getExams();

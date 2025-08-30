async function getAllCurriculums(token) {
  const curriculumsResponse = await fetch(
    "https://www.fulek.com/data/api/supit/curriculum-list/hr",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const curriculums = await curriculumsResponse.json();

  return curriculums;
}

const selectedCurriculumsMap = new Map();

function mapSelectedCurriculumsToTableBody() {
  const curriculumTableBody = document.getElementById("curriculum-table-body");

  curriculumTableBody.innerHTML = "";

  selectedCurriculumsMap.forEach((curriculum) => {
    const row = document.createElement("tr");

    row.classList.add("curriculum__table__row");
    row.innerHTML = `
      <td class="curriculum__table__datacell curriculum__table--left-align">${curriculum.kolegij}</td>
      <td class="curriculum__table__datacell">${curriculum.ects}</td>
      <td class="curriculum__table__datacell">${curriculum.sati}</td>
      <td class="curriculum__table__datacell">${curriculum.predavanja}</td>
      <td class="curriculum__table__datacell">${curriculum.vjezbe}</td>
      <td class="curriculum__table__datacell curriculum__table--left-align">${curriculum.tip}</td>
      <td class="curriculum__table__datacell">
        <button class="delete-button" onclick="handleDeleteSelectedCurriculum(${curriculum.id})">Obriši</button>
      </td>
    `;

    curriculumTableBody.appendChild(row);
  });
}

function handleDeleteSelectedCurriculum(id) {
  selectedCurriculumsMap.delete(id);

  mapSelectedCurriculumsToTableBody();
  calculateSelectedCurriculums();
}

function calculateSelectedCurriculums() {
  const ectsTotalElement = document.getElementById("ects-total");
  const hoursTotalElement = document.getElementById("hours-total");
  const lecturesTotalElement = document.getElementById("lectures-total");
  const exercisesTotalElement = document.getElementById("exercises-total");

  let ectsTotal = 0;
  let hoursTotal = 0;
  let lecturesTotal = 0;
  let exercisesTotal = 0;

  selectedCurriculumsMap.forEach((curriculum) => {
    ectsTotal += curriculum.ects;
    hoursTotal += curriculum.sati;
    lecturesTotal += curriculum.predavanja;
    exercisesTotal += curriculum.vjezbe;
  });

  ectsTotalElement.textContent = ectsTotal || "";
  hoursTotalElement.textContent = hoursTotal || "";
  lecturesTotalElement.textContent = lecturesTotal || "";
  exercisesTotalElement.textContent = exercisesTotal || "";
}

function handleCurriculumClick(
  curriculum,
  curriculumList,
  curriculumSearchInput
) {
  if (selectedCurriculumsMap.has(curriculum.id)) {
    selectedCurriculumsMap.delete(curriculum.id);
  } else {
    selectedCurriculumsMap.set(curriculum.id, curriculum);
  }

  curriculumSearchInput.value = "";
  curriculumList.innerHTML = "";

  mapSelectedCurriculumsToTableBody();
  calculateSelectedCurriculums();
}

function mapCurriculumsToListItems(
  curriculums,
  curriculumList,
  curriculumSearchInput
) {
  curriculumList.innerHTML = "";

  curriculums.forEach((curriculum) => {
    const listItem = document.createElement("li");

    listItem.textContent = curriculum.kolegij;
    listItem.classList.add("curriculum__search__list__item");
    listItem.addEventListener("click", () =>
      handleCurriculumClick(curriculum, curriculumList, curriculumSearchInput)
    );

    curriculumList.appendChild(listItem);
  });
}

function handleSearch(curriculums) {
  const curriculumSearchInput = document.getElementById(
    "curriculum-search-input"
  );
  const curriculumList = document.getElementById("curriculum-list");

  curriculumSearchInput.addEventListener("input", () => {
    const inputValue = curriculumSearchInput.value.toLowerCase();

    if (!inputValue) {
      curriculumList.innerHTML = "";

      return;
    }

    const filteredCurriculums = curriculums.filter((curriculum) =>
      curriculum.kolegij.toLowerCase().includes(inputValue)
    );

    mapCurriculumsToListItems(
      filteredCurriculums,
      curriculumList,
      curriculumSearchInput
    );
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    window.location.href = "login.html";
  }

  const allCurriculums = await getAllCurriculums(token);

  if (
    !allCurriculums ||
    allCurriculums.statusCode !== 200 ||
    allCurriculums.data.length === 0
  ) {
    return;
  }

  handleSearch(allCurriculums.data);
});

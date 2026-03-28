const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const daySelect = document.querySelector("#day");
const monthSelect = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const yearError = document.getElementById("error");

function populateMonthSelect() {
  MONTHS.forEach((name, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = name;
    monthSelect.appendChild(option);
  });
}

function getSelectedValues(select) {
  return Array.from(select.options)
    .filter((opt) => opt.selected)
    .map((opt) => opt.value);
}

function restoreSelectedValues(select, previousValues) {
  let restored = false;
  for (const option of select.options) {
    option.selected = previousValues.includes(option.value);
    if (option.selected) restored = true;
  }
  if (!restored && select.options.length > 0) {
    select.options[select.options.length - 1].selected = true;
  }
}

function updateDays() {
  const selectedMonth = parseInt(monthSelect.value);
  const previousDay = getSelectedValues(daySelect);
  const year = parseInt(yearInput.value) || new Date().getFullYear();

  daySelect.innerHTML = "";

  const lastDay = new Date(year, selectedMonth, 0).getDate();
  for (let i = 1; i <= lastDay; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    daySelect.appendChild(option);
  }

  restoreSelectedValues(daySelect, previousDay);
}

function showError() {
  yearInput.classList.add("input-border-error");
  yearError.classList.remove("hidden-info");
  yearError.classList.add("info-error");
}

function clearError() {
  yearInput.classList.remove("input-border-error");
  yearError.classList.add("hidden-info");
  yearError.classList.remove("info-error");
}

function handleCalculate() {
  const yearValue = yearInput.value.trim();
  const yearNum = parseInt(yearValue);
  const currentYear = new Date().getFullYear();

  if (
    !yearValue ||
    yearValue.length < 4 ||
    isNaN(yearNum) ||
    yearNum < 1900 ||
    yearNum > currentYear
  ) {
    showError();
    return;
  }

  clearError();

  const today = new Date();
  const birthDate = new Date(
    yearNum,
    parseInt(monthSelect.value) - 1,
    parseInt(daySelect.value)
  );

  const { years, months, days } = calculateAge(birthDate, today);
  const daysLeft = daysUntilBirthday(birthDate, today);

  document.getElementById("year-value").textContent = `${years} Anos`;
  document.getElementById("month-value").textContent = `${months} Meses`;
  document.getElementById("day-value").textContent = `${days} Dias`;
  document.getElementById("birthday-value").textContent = `${daysLeft} Dias`;
}

function init() {
  populateMonthSelect();
  updateDays();
  monthSelect.addEventListener("change", updateDays);
  yearInput.addEventListener("input", () => {
    yearInput.value = yearInput.value.replace(/\D/g, "");
    updateDays();
  });
  document
    .getElementById("btn-calculate")
    .addEventListener("click", handleCalculate);
}

init();

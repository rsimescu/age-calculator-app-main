let dayInput = document.querySelector("#dayInput");
let monthInput = document.querySelector("#monthInput");
let yearInput = document.querySelector("#yearInput");
let button = document.querySelector(".buttonContainer");
let day = document.querySelector("#days");
let month = document.querySelector("#months");
let year = document.querySelector("#years");



monthInput.addEventListener("input", () => {
  if (monthInput.value.length >= 2) {
    monthInput.value = monthInput.value.slice(0, 2);
  }

  if (monthInput.value > 12) {
    document.querySelector(".errorValidMonth").classList.add("visible");
    document.querySelector(".monthLabel").classList.add("error");
    document.querySelector("#monthInput").classList.add("errorBorder")
  } else {
    document.querySelector(".errorValidMonth").classList.remove("visible");
    document.querySelector(".monthLabel").classList.remove("error");
    document.querySelector("#monthInput").classList.remove("errorBorder")
  }
});

dayInput.addEventListener("input", () => {
  if (dayInput.value.length >= 2) {
    dayInput.value = dayInput.value.slice(0, 2);
  }

  if (dayInput.value > 31) {
    document.querySelector(".errorValidDay").classList.add("visible");
    document.querySelector(".dayLabel").classList.add("error");
    document.querySelector("#dayInput").classList.add("errorBorder");
    
  } else {
    document.querySelector(".errorValidDay").classList.remove("visible");
    document.querySelector(".dayLabel").classList.remove("error");
    document.querySelector("#dayInput").classList.remove("errorBorder");
  }
});

yearInput.addEventListener("input", () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const birthYear = parseInt(yearInput.value);
  if (birthYear > currentYear) {
    document.querySelector(".errorValidYear").classList.add("visible");
    document.querySelector(".yearLabel").classList.add("error");
    document.querySelector("#yearInput").classList.add("errorBorder");
  } else {
    document.querySelector(".errorValidYear").classList.remove("visible");
    document.querySelector(".yearLabel").classList.remove("error");
    document.querySelector("#yearInput").classList.remove("errorBorder");
  }
});

monthInput.addEventListener("input", () => {
  if (monthInput.value.length >= 2) {
    monthInput.value = monthInput.value.slice(0, 2);
  }
});

dayInput.addEventListener("input", () => {
  if (dayInput.value.length >= 2) {
    dayInput.value = dayInput.value.slice(0, 2);
  }
});

yearInput.addEventListener("input", () => {
  if (yearInput.value.length >= 2) {
    yearInput.value = yearInput.value.slice(0, 4);
  }
});



button.addEventListener("click", () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  const birthDay = parseInt(dayInput.value);
  const birthMonth = parseInt(monthInput.value);
  const birthYear = parseInt(yearInput.value);

 
  const inputDate = new Date(birthYear, birthMonth - 1, birthDay); 
  const isValidDate = inputDate.getFullYear() === birthYear &&
                      inputDate.getMonth() + 1 === birthMonth &&
                      inputDate.getDate() === birthDay;

  if (!isValidDate) {
  
    document.querySelector(".yearLabel").classList.add("error");
    document.querySelector(".monthLabel").classList.add("error");
    document.querySelector(".dayLabel").classList.add("error");
    document.querySelector(".validDate").classList.add("visible");
    document.querySelector("#yearInput").classList.add("errorBorder");
    document.querySelector("#dayInput").classList.add("errorBorder");
    document.querySelector("#monthInput").classList.add("errorBorder");
    day.innerHTML = "--";
    month.innerHTML = "--";
    year.innerHTML = "--";
    return;
  } else {
  
    document.querySelector(".yearLabel").classList.remove("error");
    document.querySelector(".monthLabel").classList.remove("error");
    document.querySelector(".dayLabel").classList.remove("error");
    document.querySelector(".validDate").classList.remove("visible");
    document.querySelector("#yearInput").classList.remove("errorBorder");
    document.querySelector("#dayInput").classList.remove("errorBorder");
    document.querySelector("#monthInput").classList.remove("errorBorder");
  }

  let calculatedYear = currentYear - birthYear;
  let calculatedMonth = currentMonth - birthMonth;
  let calculatedDay = currentDay - birthDay;

  if (calculatedDay < 0) {
    calculatedMonth--;
    calculatedDay += new Date(currentYear, currentMonth - 1, 0).getDate();
  }

  if (calculatedMonth < 0) {
    calculatedYear--;
    calculatedMonth += 12;
  }

  day.innerHTML = calculatedDay;
  month.innerHTML = calculatedMonth;
  year.innerHTML = calculatedYear;
});

button.addEventListener("click", () => {
  if (dayInput.value === "") {
    document.querySelector(".errorEmptyInputDay").classList.add("visible");
    document.querySelector(".dayLabel").classList.add("error");
    document.querySelector(".validDate").classList.remove("visible");
  }
  else{
    document.querySelector(".errorEmptyInputDay").classList.remove("visible");
    document.querySelector(".dayLabel").classList.remove("error");
  }
});

button.addEventListener("click", () => {
  if (monthInput.value === "") {
    document.querySelector(".errorEmptyInputMonth").classList.add("visible");
    document.querySelector(".monthLabel").classList.add("error");

  }
  else{
    document.querySelector(".errorEmptyInputMonth").classList.remove("visible");
    document.querySelector(".monthLabel").classList.remove("error");
  }
});

button.addEventListener("click", () => {
  if (yearInput.value === "") {
    document.querySelector(".errorEmptyInputYear").classList.add("visible");
    document.querySelector(".yearLabel").classList.add("error");
  }
  else{
    document.querySelector(".errorEmptyInputYear").classList.remove("visible");
    document.querySelector(".yearLabel").classList.remove("error");
  }
});


dayInput.addEventListener("input", () => {
  if (dayInput.value != "") {
    document.querySelector(".errorEmptyInputDay").classList.remove("visible");
    document.querySelector(".dayLabel").classList.remove("error");
  }
});

monthInput.addEventListener("input", () => {
  if (monthInput.value != "") {
    document.querySelector(".errorEmptyInputMonth").classList.remove("visible");
    document.querySelector(".monthLabel").classList.remove("error");
  }
});

yearInput.addEventListener("input", () => {
  if (yearInput.value != "") {
    document.querySelector(".errorEmptyInputYear").classList.remove("visible");
    document.querySelector(".yearLabel").classList.remove("error");
  }
});
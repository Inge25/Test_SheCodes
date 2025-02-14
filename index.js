function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-input");
  let currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = searchInput.value;
  console.log(currentCity);
}

let searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", search);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let formattedDatetime = `${day} ${hours}:${minutes}`;
console.log(hours);

let currentDateTime = document.getElementById("formatted-datetime");
currentDateTime.textContent = formattedDatetime;

const axios = require(`axios`);
let now = new Date();
let date = now.getDate();

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let day = days[now.getDay()];
  let month = months[now.getMonth()];
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return `Today is ${day}, ${month} ${date} at ${hour}:${minute}`;
}
let todayDate = document.querySelector("h1");
todayDate.innerHTML = formatDate(date);

function searchCity(event) {
  event.preventDefault();
  let h2 = document.querySelector("h2");
  let city = document.querySelector("#city");
  h2.innerHTML = city.value;
  searchCityTemp();
}

function searchCityTemp() {
  let apiKey = "d48d4b5497b80afe11b97996f98ac702";
  let city = document.querySelector("#city").value;
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then((res) => {
    let searchCityTemp = document.querySelector(".current-temp");
    searchCityTemp.innerHTML = Math.round(res.data.main.temp);
    console.log(res);
  });
}

let button = document.querySelector(".search-button");
button.addEventListener("click", searchCity, searchCityTemp);

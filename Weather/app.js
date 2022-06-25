import WEATHER_API_KEY from "./JS/keys.js";
// Selectors
const form = document.querySelector(".search-bar");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("button");
const textContent = document.querySelector(".text-content");
const location = document.querySelector("#location");
const condition = document.querySelector("#condition");
const temp = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");
const icon = document.querySelector("#icon");
let searchValue;
let url;

// Event listeners
form.addEventListener("submit", (e) => {
    e.preventDefault();
});
searchInput.addEventListener("input", getSearch);
searchBtn.addEventListener("click", update);

// Functions
function getSearch(e){
    searchValue =e.target.value;
}

async function update(){
    url = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${searchValue}&aqi=no`;
    const dataFetch = await fetch (url);
    const data = await dataFetch.json();
    textContent.classList.remove("hidden");
    console.log(data);
    location.innerText = `${data.location.name},${data.location.country}`;
    temp.innerText = `${data.current.feelslike_c}℃`;
    condition.innerText = data.current.condition.text;
}

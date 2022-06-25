// Selectors
const form = document.querySelector(".search-bar");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("button");
const textContent = document.querySelector(".text-content");
const location = document.querySelector("#location");
const condition = document.querySelector("#condition");
const temp = document.querySelector("#temp");
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
    url = `http://api.weatherapi.com/v1/current.json?key=459e9402d2544774bfb44858222206&q=${searchValue}&aqi=no`;
    const dataFetch = await fetch (url);
    const data = await dataFetch.json();
    textContent.classList.remove("hidden");
    location.innerText = `${data.location.name},${data.location.country}`;
    temp.innerText = `${data.current.feelslike_c}℃`;
    condition.innerText = data.current.condition.text;
}

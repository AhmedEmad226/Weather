// Global
const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")
// for day 1
let nowDay = document.querySelector(".nowDay")
let nowDate = document.querySelector(".nowDate")
let nowIcon = document.getElementById("nowIcon")
let cityName = document.getElementById("cityName")
let caseNow = document.getElementById("weatherCaseNow")
let nowTemp = document.getElementById("nowTemp")
let rainChance = document.getElementById("rainChance")
let windSpeed = document.getElementById("windSpeed")
let windDirection = document.getElementById("windDirection")
// for day 2
let secondDay = document.getElementById("secondDay")
let secondIcon = document.getElementById("secondIcon")
let secondTemp_f = document.getElementById("secondTemp_f")
let secondTemp_c = document.getElementById("secondTemp_c")
let caseSecond = document.getElementById("weatherCaseSecond")

// for day 3
let thirdDay = document.getElementById("thirdDay")
let thirdIcon = document.getElementById("thirdIcon")
let thirdTemp_f = document.getElementById("thirdTemp_f")
let thirdTemp_c = document.getElementById("thirdTemp_c")
let caseThird = document.getElementById("weatherCaseThird")




const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const api = "6413ee41a126424b8d392842240912"
const baseURL = "http://api.weatherapi.com/v1/forecast.json"
let searchAbout = ""

searchBtn.addEventListener("click", function(){
    readSearch()
    fetchWeather()
})

function readSearch(){
    searchAbout = searchInput.value
}

async function fetchWeather() {
    const respond = await fetch(`${baseURL}?key=${api}&q=${searchAbout}`);
    const final = await respond.json();

    let date = new Date(final.location.localtime)

    //change 1
    nowDate.innerHTML = months[date.getMonth()]
    nowDay.innerHTML = days[date.getDay()]
    cityName.innerHTML = final.location.name
    caseNow.innerHTML = final.current.condition.text
    nowTemp.innerHTML = final.current.temp_f
    rainChance.innerHTML = final.current.precip_mm
    windSpeed.innerHTML = final.current.wind_kph
    windDirection.innerHTML = final.current.wind_dir
    nowIcon.setAttribute('src', `https:${final.current.condition.icon}`);

    //change 2

    

    secondDay.innerHTML = days[(date.getDay() + 1) % 7];
    secondIcon.setAttribute("src", `https:${final.forecast.forecastday[1].day.condition.icon}`); 
    secondTemp_f.innerHTML = final.forecast.forecastday[1].day.avgtemp_f;
    secondTemp_c.innerHTML = final.forecast.forecastday[1].day.avgtemp_c;
    caseSecond.innerHTML = final.forecast.forecastday[1].day.condition.text;

}
https://github.com/AhmedEmad226/Weather.git
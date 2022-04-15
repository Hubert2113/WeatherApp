import './sass/main.scss';
import {getCityWeather, citiesData} from './partials-js/data_fetch';
import axios from 'axios';

let defaultCity = [];

document.addEventListener("DOMContentLoaded", async () => {
    await axios.get("https://api.openweathermap.org/data/2.5/forecast?lat=52.2319581&lon=21.0067249&units=metric&appid=86882c431a5c1fa03f48939e3b313043")
    .then((response) => {
        defaultCity.push(response);
    })
    .catch((error) => {
        return error;
    });
});

$searchInput.addEventListener("input", async (ev) => {
    $searchBtn.addEventListener("click", await getCityWeather(ev));
});
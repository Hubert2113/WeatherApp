import './sass/main.scss';
import './partials-js/chart';
import {getCityWeather, citiesData, getDefaultCityData, getInputValue,
    defaultCity, inputValue} from './partials-js/data_fetch';
import axios from 'axios';

const $searchInput = document.querySelector("input.search-bar");
const $submitBtn = document.querySelector("button.submit-btn");

document.addEventListener("DOMContentLoaded", getDefaultCityData);

$searchInput.addEventListener("input", getInputValue);
$submitBtn.addEventListener("click", async (ev) => {
    ev.preventDefault();
    await getCityWeather(inputValue);
});

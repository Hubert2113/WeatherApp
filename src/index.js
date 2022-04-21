import './sass/main.scss';
import './partials-js/chart';
import './partials-js/weather';
import {getCityWeather, getDefaultCityData, getInputValue,
    inputValue, cityData} from './partials-js/data_fetch';
import axios from 'axios';
import { historyAddCity } from './partials-js/history_city';

const $searchInput = document.querySelector('input.search-bar');
const $submitBtn = document.querySelector('button.submit-btn');


$searchInput.addEventListener("input", getInputValue);
$submitBtn.addEventListener("click", async (ev) => {
    ev.preventDefault();
    await getCityWeather(inputValue);
});

console.log(cityData);
historyAddCity(cityData);


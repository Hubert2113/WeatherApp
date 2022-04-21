import './sass/main.scss';
import './partials-js/chart';
import {getCityWeather, citiesData, getDefaultCityData, getInputValue,
    defaultCity, inputValue} from './partials-js/data_fetch';
import axios from 'axios';
import { historyAddCity } from './partials-js/history_city'

const $searchInput = document.querySelector("input.search-bar");
const $submitBtn = document.querySelector("button.submit-btn");

document.addEventListener("DOMContentLoaded", getDefaultCityData());

// $searchInput.addEventListener("input", getInputValue(ev));
// $submitBtn.addEventListener("click", await getCityWeather(ev));
console.log(defaultCity);
historyAddCity(defaultCity);

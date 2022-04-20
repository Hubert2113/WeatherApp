import './sass/main.scss';
import './partials-js/chart';

import {getCityWeather, citiesData, getDefaultCityData, getInputValue,
    defaultCity, inputValue} from './partials-js/data_fetch';
import axios from 'axios';

const $searchInput = document.querySelector("input.search-bar");
const $submitBtn = document.querySelector("button.submit-btn");

document.addEventListener('DOMContentLoaded', getDefaultCityData(defaultCity));
// $searchInput.addEventListener('input', async ev => {
//   $searchBtn.addEventListener('click', await getCityWeather(ev));
// });
console.log(defaultCity);


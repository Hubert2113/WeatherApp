import './sass/main.scss';
import './partials-js/chart';
import './partials-js/weather';
import {getCityWeather, getDefaultCityData, getInputValue,
    inputValue, cityData} from './partials-js/data_fetch';
import axios from 'axios';

import {
  createGalleryTags,
  unixTimeConverterHhMm,
  shiftInSecondsConverter,
} from './partials-js/date_time_section';

createGalleryTags(defaultCity, unixTimeConverterHhMm, shiftInSecondsConverter);

const $searchInput = document.querySelector("input.search-bar");
const $submitBtn = document.querySelector("button.submit-btn");

document.addEventListener("DOMContentLoaded", getDefaultCityData);

$searchInput.addEventListener("input", getInputValue);
$submitBtn.addEventListener("click", async (ev) => {
    ev.preventDefault();
    await getCityWeather(inputValue);
});

console.log(cityData);
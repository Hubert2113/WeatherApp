import './sass/main.scss';
// import './partials-js/chart';
import {getCityWeather, citiesData, getDefaultCityData, getInputValue,
    defaultCity, inputValue} from './partials-js/data_fetch';
import axios from 'axios';

import {
  createGalleryTags,
  unixTimeConverterHhMm,
  shiftInSecondsConverter,
} from './partials-js/date_time_section';

createGalleryTags(defaultCity, unixTimeConverterHhMm, shiftInSecondsConverter);

const $searchInput = document.querySelector("input.search-bar");
const $submitBtn = document.querySelector("button.submit-btn");

document.addEventListener("DOMContentLoaded", getDefaultCityData());

// $searchInput.addEventListener("input", getInputValue(ev));
// $submitBtn.addEventListener("click", await getCityWeather(ev));
// console.log(defaultCity);
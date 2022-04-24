import './sass/main.scss';
import './partials-js/chart';
import './partials-js/weather';
import {
  getCityWeather,
  getDefaultCityData,
  getInputValue,
  inputValue,
} from './partials-js/data_fetch';

import moment from 'moment';
import axios from 'axios';
import { historyAddCity, HistoryCityDelete, historyCityVieve } from './partials-js/history_city';
import { GenerateView5Days } from './partials-js/5days';
import { loadStorage } from './partials-js/storage';

import {
  createHTMLMarkup,
  timer,
  unixTimeConverterHhMm,
  shiftInSecondsConverter,
} from './partials-js/date_time_section';


const $searchInput = document.querySelector("input.search-bar");
const $submitBtn = document.querySelector("button.submit-btn");
const secondCity = {
  city: {
    id: 2643743,
    name: 'London',
    coord: {
      lat: 51.5073,
      lon: -0.1277,
    },
  },
};

export let cityData = loadStorage("cityData");

const $searchInput = document.querySelector('input.search-bar');
const $submitBtn = document.querySelector('button.submit-btn');
const $Days5Btn = document.querySelector('#Days5Btn');

document.addEventListener("DOMContentLoaded", getDefaultCityData);

$searchInput.addEventListener('input', getInputValue);
$submitBtn.addEventListener('click', async ev => {
  ev.preventDefault();
  await getCityWeather(inputValue);
});

console.log(cityData);

createHTMLMarkup(cityData);
setInterval(() => timer(cityData), 1000);
$Days5Btn.addEventListener('click', GenerateView5Days);

// historyAddCity(cityData);
// historyCityVieve();
// GenerateView5Days();

console.log(cityData);

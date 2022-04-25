import './sass/main.scss';
import './partials-js/chart';
import {
  getCityWeather,
  getDefaultCityData,
  getInputValue,
  inputValue,
} from './partials-js/data_fetch';
import moment from 'moment';
import axios from 'axios';
import { historyAddCity, HistoryCityDelete, historyCityVieve } from './partials-js/history_city';
import { GenerateView5Days, Day5Hiden } from './partials-js/5days';
import { loadStorage } from './partials-js/storage';
import {
  createHTMLMarkup,
  timer,
  unixTimeConverterHhMm,
  shiftInSecondsConverter,
} from './partials-js/date_time_section';
import {setTodayAsActive, set5DaysAsActive} from './partials-js/weather_buttons';

export let cityData = loadStorage('cityData');

// definicje przycisków 

const $searchInput = document.querySelector('input.search-bar');
const $submitBtn = document.querySelector('button.submit-btn');
const $Days5Btn = document.querySelector('#Days5Btn');
const $Days1Btn = document.querySelector('#Days1Btn');

$Days5Btn.addEventListener('click', GenerateView5Days);
$Days1Btn.addEventListener('click', Day5Hiden);

historyCityVieve(0);

const todayBtn = document.querySelector("#todayBtn");
// dodanie event listenerów

document.addEventListener("DOMContentLoaded", getDefaultCityData);
$searchInput.addEventListener('input', getInputValue);
$submitBtn.addEventListener('click', async ev => {
  ev.preventDefault();
  await getCityWeather(inputValue);
  historyAddCity(cityData);
  historyCityVieve(1);
});

//=========kod dzieku ktoremu jezeli jeszcze cityData nie jest dostępne
//========= w local storage to przeładuje strone ======================
if (!loadStorage('cityData')) {
  document.addEventListener('DOMContentLoaded', getDefaultCityData);

  setTimeout(() => {
    location.reload();
  }, 500);
}

createHTMLMarkup(cityData);
setInterval(() => timer(cityData), 1000);
$Days5Btn.addEventListener('click', GenerateView5Days);
todayBtn.addEventListener('click', setTodayAsActive);
$Days5Btn.addEventListener('click', set5DaysAsActive);
// historyAddCity(cityData);
// historyCityVieve();
// GenerateView5Days();

console.log(cityData);


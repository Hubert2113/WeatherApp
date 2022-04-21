import './sass/main.scss';
// import './partials-js/chart';
// import './partials-js/weather';
import {
  getCityWeather,
  getDefaultCityData,
  getInputValue,
  inputValue,
  cityData,
} from './partials-js/data_fetch';
import axios from 'axios';
import { historyAddCity } from './partials-js/history_city';

// const $searchInput = document.querySelector('input.search-bar');
// const $submitBtn = document.querySelector('button.submit-btn');

// document.addEventListener('DOMContentLoaded', getDefaultCityData);
get();
// $searchInput.addEventListener("input", getInputValue);
// $submitBtn.addEventListener("click", async (ev) => {
//     ev.preventDefault();
//     await getCityWeather(inputValue);
// });
console.log('co mam');
console.log(cityData);
let licznik = 1;
while (cityData === null) {
  console.log(licznik);
  licznik++;
  if (licznik === 10) break;
}
historyAddCity(cityData);

async function get() {
  console.log('dupa1');
  await getDefaultCityData();
  console.log('dupa2');
}

import './sass/main.scss';
import './partials-js/chart';
import axios from 'axios';

import {
  getCityWeather,
  citiesData,
  getInputValue,
  inputValue,
  getDefaultCityData,
  dataCity,
} from './partials-js/data_fetch';
import { historyAddCity, historyCityVieve } from './partials-js/history_city';

async function czekanie_na_wartosc_domyslna() {
  await getDefaultCityData();

  const $searchInput = document.querySelector('input.search-bar');
  const $submitBtn = document.querySelector('button.submit-btn');

  document.addEventListener('DOMContentLoaded', getDefaultCityData());
  $searchInput.addEventListener('input', async ev => {
    $searchBtn.addEventListener('click', await getCityWeather(ev));
  });

  console.log(dataCity);
  historyAddCity(dataCity);
  historyCityVieve();
}
czekanie_na_wartosc_domyslna();

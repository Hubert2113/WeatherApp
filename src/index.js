import './sass/main.scss';
import './partials-js/chart';
import './partials-js/weather';
import {
  getCityWeather,
  getDefaultCityData,
  getInputValue,
  inputValue,
  cityData,
} from './partials-js/data_fetch';
import axios from 'axios';
import { historyAddCity, HistoryCityDelete, historyCityVieve } from './partials-js/history_city';

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

const $searchInput = document.querySelector('input.search-bar');
const $submitBtn = document.querySelector('button.submit-btn');

$searchInput.addEventListener('input', getInputValue);
$submitBtn.addEventListener('click', async ev => {
  ev.preventDefault();
  await getCityWeather(inputValue);
});

console.log(cityData);
historyAddCity(cityData);
historyAddCity(secondCity);
historyCityVieve();


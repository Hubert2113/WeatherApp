import './sass/main.scss';
import './partials-js/chart';
import './partials-js/weather';
import {
  getCityWeather,
  getDefaultCityData,
  getInputValue,
  inputValue,
  // cityData,
} from './partials-js/data_fetch';
import axios from 'axios';

const $searchInput = document.querySelector("input.search-bar");
const $submitBtn = document.querySelector("button.submit-btn");

export let cityData = JSON.parse(localStorage.getItem("cityData"));

const $searchInput = document.querySelector('input.search-bar');
const $submitBtn = document.querySelector('button.submit-btn');
const $Days5Btn = document.querySelector('#Days5Btn');

document.addEventListener("DOMContentLoaded", getDefaultCityData);

$searchInput.addEventListener('input', getInputValue);
$submitBtn.addEventListener('click', async ev => {
  ev.preventDefault();
  await getCityWeather(inputValue);
});

$Days5Btn.addEventListener('click', GenerateView5Days);

// historyAddCity(cityData);
historyCityVieve();
GenerateView5Days();

console.log(cityData);

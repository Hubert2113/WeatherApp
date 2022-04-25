import { loadStorage } from './storage';
import { arrayOfKey } from './history_city';
import { cityData } from '../index';
import {
    getCityWeather,
    citiesData,
    getDefaultCityData,
    getInputValue,
    defaultCity,
    inputValue,
  } from './data_fetch';
//const APIkey = d178afedb1e548b1bf806b5c28441db3;


const city_name = cityData.name;
const current_temp = cityData.main.temp;
const min_temp = cityData.main.temp_min;
const max_temp = cityData.main.temp_max;

const today_section = `
      <div class="section-active weather-container">
    <p>${city_name}</p>
    <p>${Math.round(current_temp)}&deg</p>
    <div class="today_temp_txt">
    <p>min</p>
    <p>max</p>
    </div>
    <div class="today_temp_value">
    <p>${Math.round(min_temp)} &deg</p>
    <p>${Math.round(max_temp)} &deg</p>
    </div>`;
    const $todaySection = document.querySelector('.weather-container');
    $todaySection.innerHTML = today_section;
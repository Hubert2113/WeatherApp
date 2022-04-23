'use strict';
import axios from 'axios';
import { cityData } from '../index';
import {saveStorage} from "./storage";

const $citySearchField = document.querySelector('form input');
const $citySearchBtn = document.querySelector('form button');

// export let cityData = localStorage.getItem(756135);
export let inputValue = null;
export let coordinates = {
    lat: 52.2319581,
    lon: 21.0067249,
}

export function getInputValue(ev){
  inputValue = ev.target.value;
}

export function getCityWeather(inputValue) {
  getCoordinates(inputValue)
    .then(response => {
      for (const city of response.data) {
        coordinates.lat = city.lat;
        coordinates.lon = city.lon;
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=86882c431a5c1fa03f48939e3b313043`,
          )
          .then(weatherData => {
            cityData = weatherData.data;
            return cityData;
          });
      }
    })
    .catch(error => {
      return error;
    });
}

function getCoordinates(inputValue) {
  return axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=1&appid=86882c431a5c1fa03f48939e3b313043`,
  );
}

export async function getDefaultCityData() {
  await axios
    .get(
      'https://api.openweathermap.org/data/2.5/forecast?lat=52.2319581&lon=21.0067249&units=metric&appid=86882c431a5c1fa03f48939e3b313043',
    )
    .then(response => {
      historyAddCity(response.data);
    })
    .catch(error => {
      console.error(error);
      return error;
    });
}
export function historyAddCity(cityData) {
  saveStorage("cityData", cityData);
}
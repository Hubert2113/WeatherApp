'use strict';
import axios from 'axios';

const $citySearchField = document.querySelector('form input');
const $citySearchBtn = document.querySelector('form button');

export function getCityWeather(ev) {
  const citiesData = [];
  getCoordinates(ev)
    .then(response => {
      for (const city of response) {
        axios
          .get(
            `api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=86882c431a5c1fa03f48939e3b313043`,
          )
          .then(weatherData => {
            citiesData.push(weatherData);
          });
      }
    })
    .catch(error => {
      return error;
    });
  return citiesData;
}

function getCoordinates(ev) {
  return axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${ev.target.value}&limit=1&appid=86882c431a5c1fa03f48939e3b313043`,
  );
}

// $citySearchBtn.addEventListener("click", getCityWeather());

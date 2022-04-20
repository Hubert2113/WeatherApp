'use strict';
import axios from 'axios';
const $citySearchField = document.querySelector('form input');
const $citySearchBtn = document.querySelector('form button');

export let dataCity;
// export let citiesData = [];
// export let defaultCity = [];
// export let inputValue = null;

// export function getInputValue(ev){
//     inputValue = ev.target.value;
//     console.log(inputValue);
// }

export function getCityWeather(ev) {
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
  console.log(citiesData);
  return citiesData;
}

function getCoordinates(ev) {
  return axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${ev.target.value}&limit=1&appid=86882c431a5c1fa03f48939e3b313043`,
  );
}

export async function getDefaultCityData() {
  await axios
    .get(
      'https://api.openweathermap.org/data/2.5/forecast?lat=52.2319581&lon=21.0067249&units=metric&appid=86882c431a5c1fa03f48939e3b313043',
    )
    .then(response => {
      dataCity = response.data;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

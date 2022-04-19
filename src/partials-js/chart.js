'use strict';
import Chart from 'chart.js/auto';
//API Key
const key = '86882c431a5c1fa03f48939e3b313043&units=metric';
// https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&cnt=5&appid=86882c431a5c1fa03f48939e3b313043&units=metric
//DOM imports
const ctx = document.getElementById('myChart');
//Test Array
const testArray = {
  cod: '200',
  message: 0,
  cnt: 5,
  list: [
    {
      dt: 1649883600,
      main: {
        temp: 6.71,
        feels_like: 2.9,
        temp_min: 6.15,
        temp_max: 6.71,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1016,
        humidity: 89,
        temp_kf: 0.56,
      },
      weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
      clouds: { all: 88 },
      wind: { speed: 6.46, deg: 321, gust: 11.78 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-04-13 21:00:00',
    },
    {
      dt: 1649894400,
      main: {
        temp: 6.42,
        feels_like: 2.88,
        temp_min: 5.83,
        temp_max: 6.42,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1017,
        humidity: 89,
        temp_kf: 0.59,
      },
      weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
      clouds: { all: 87 },
      wind: { speed: 5.54, deg: 319, gust: 10.37 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-04-14 00:00:00',
    },
    {
      dt: 1649905200,
      main: {
        temp: 5.46,
        feels_like: 2.83,
        temp_min: 4.83,
        temp_max: 5.46,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1018,
        humidity: 91,
        temp_kf: 0.63,
      },
      weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' }],
      clouds: { all: 53 },
      wind: { speed: 3.34, deg: 315, gust: 5.19 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-04-14 03:00:00',
    },
    {
      dt: 1649916000,
      main: {
        temp: 5.29,
        feels_like: 3.36,
        temp_min: 5.29,
        temp_max: 5.29,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1019,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
      clouds: { all: 66 },
      wind: { speed: 2.37, deg: 307, gust: 2.68 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-04-14 06:00:00',
    },
    {
      dt: 1649926800,
      main: {
        temp: 8.41,
        feels_like: 8.41,
        temp_min: 8.41,
        temp_max: 8.41,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1020,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
      clouds: { all: 73 },
      wind: { speed: 0.37, deg: 110, gust: 0.77 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-04-14 09:00:00',
    },
  ],
  city: {
    id: 2641549,
    name: 'Newtonhill',
    coord: { lat: 57, lon: -2.15 },
    country: 'GB',
    population: 3284,
    timezone: 3600,
    sunrise: 1649826353,
    sunset: 1649877119,
  },
};
// console.log(Object.values(testArray));
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
console.log(getKeyByValue(testArray, 'dt'));
//create chart
const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [-5, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const config = {
  type: 'line',
  data: data,
  options: {},
};
const myChart = new Chart(document.getElementById('myChart'), config);

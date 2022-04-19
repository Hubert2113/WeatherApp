'use strict';
import Chart from 'chart.js/auto';
//API Key
const key = '86882c431a5c1fa03f48939e3b313043&units=metric';
// https://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=3&appid=86882c431a5c1fa03f48939e3b313043&units=metric
// https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&cnt=5&appid=86882c431a5c1fa03f48939e3b313043&units=metric
//DOM imports
const ctx = document.getElementById('myChart');
//Test Array
const test = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1650402000,
      main: {
        temp: 5.24,
        feels_like: 3.26,
        temp_min: 4.51,
        temp_max: 5.24,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1001,
        humidity: 76,
        temp_kf: 0.73,
      },
      weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02n' }],
      clouds: { all: 20 },
      wind: { speed: 2.41, deg: 345, gust: 4.04 },
      visibility: 10000,
      pop: 0.19,
      sys: { pod: 'n' },
      dt_txt: '2022-04-19 21:00:00',
    },
    {
      dt: 1650412800,
      main: {
        temp: 4.87,
        feels_like: 2.45,
        temp_min: 4.12,
        temp_max: 4.87,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1000,
        humidity: 82,
        temp_kf: 0.75,
      },
      weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03n' }],
      clouds: { all: 43 },
      wind: { speed: 2.87, deg: 286, gust: 4.53 },
      visibility: 10000,
      pop: 0.04,
      sys: { pod: 'n' },
      dt_txt: '2022-04-20 00:00:00',
    },
    {
      dt: 1650423600,
      main: {
        temp: 4.76,
        feels_like: 1.96,
        temp_min: 4.52,
        temp_max: 4.76,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 999,
        humidity: 86,
        temp_kf: 0.24,
      },
      weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' }],
      clouds: { all: 73 },
      wind: { speed: 3.36, deg: 286, gust: 5.71 },
      visibility: 10000,
      pop: 0.08,
      sys: { pod: 'n' },
      dt_txt: '2022-04-20 03:00:00',
    },
    {
      dt: 1650434400,
      main: {
        temp: 4.44,
        feels_like: 1.62,
        temp_min: 4.44,
        temp_max: 4.44,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 997,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [{ id: 501, main: 'Rain', description: 'moderate rain', icon: '10d' }],
      clouds: { all: 100 },
      wind: { speed: 3.3, deg: 264, gust: 6.95 },
      visibility: 7945,
      pop: 0.79,
      rain: { '3h': 3.43 },
      sys: { pod: 'd' },
      dt_txt: '2022-04-20 06:00:00',
    },
    {
      dt: 1650445200,
      main: {
        temp: 5.3,
        feels_like: 3.14,
        temp_min: 5.3,
        temp_max: 5.3,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 996,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [{ id: 501, main: 'Rain', description: 'moderate rain', icon: '10d' }],
      clouds: { all: 100 },
      wind: { speed: 2.64, deg: 251, gust: 3.45 },
      visibility: 10000,
      pop: 1,
      rain: { '3h': 4.75 },
      sys: { pod: 'd' },
      dt_txt: '2022-04-20 09:00:00',
    },
    {
      dt: 1650456000,
      main: {
        temp: 5.86,
        feels_like: 4.38,
        temp_min: 5.86,
        temp_max: 5.86,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 997,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: { all: 100 },
      wind: { speed: 1.99, deg: 221, gust: 2.2 },
      visibility: 10000,
      pop: 1,
      rain: { '3h': 0.12 },
      sys: { pod: 'd' },
      dt_txt: '2022-04-20 12:00:00',
    },
    {
      dt: 1650466800,
      main: {
        temp: 6.09,
        feels_like: 5.1,
        temp_min: 6.09,
        temp_max: 6.09,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 997,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
      clouds: { all: 100 },
      wind: { speed: 1.57, deg: 246, gust: 1.68 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-04-20 15:00:00',
    },
    {
      dt: 1650477600,
      main: {
        temp: 5.67,
        feels_like: 4.18,
        temp_min: 5.67,
        temp_max: 5.67,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 998,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
      clouds: { all: 100 },
      wind: { speed: 1.97, deg: 267, gust: 3.17 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-04-20 18:00:00',
    },
    {
      dt: 1650488400,
      main: {
        temp: 5.64,
        feels_like: 4.02,
        temp_min: 5.64,
        temp_max: 5.64,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 997,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
      clouds: { all: 100 },
      wind: { speed: 2.1, deg: 279, gust: 4.36 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-04-20 21:00:00',
    },
    {
      dt: 1650499200,
      main: {
        temp: 5.89,
        feels_like: 4.35,
        temp_min: 5.89,
        temp_max: 5.89,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 996,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
      clouds: { all: 100 },
      wind: { speed: 2.06, deg: 313, gust: 5.38 },
      visibility: 6890,
      pop: 0.39,
      rain: { '3h': 0.36 },
      sys: { pod: 'n' },
      dt_txt: '2022-04-21 00:00:00',
    },
    {
      dt: 1650510000,
      main: {
        temp: 6.13,
        feels_like: 4.58,
        temp_min: 6.13,
        temp_max: 6.13,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 996,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
      clouds: { all: 100 },
      wind: { speed: 2.11, deg: 16, gust: 5.55 },
      visibility: 10000,
      pop: 0.87,
      rain: { '3h': 0.86 },
      sys: { pod: 'n' },
      dt_txt: '2022-04-21 03:00:00',
    },
    {
      dt: 1650520800,
      main: {
        temp: 6.25,
        feels_like: 6.25,
        temp_min: 6.25,
        temp_max: 6.25,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 996,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: { all: 100 },
      wind: { speed: 1.29, deg: 345, gust: 3.47 },
      visibility: 10000,
      pop: 0.99,
      rain: { '3h': 0.27 },
      sys: { pod: 'd' },
      dt_txt: '2022-04-21 06:00:00',
    },
    {
      dt: 1650531600,
      main: {
        temp: 6.99,
        feels_like: 6.04,
        temp_min: 6.99,
        temp_max: 6.99,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 997,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: { all: 100 },
      wind: { speed: 1.65, deg: 9, gust: 4.63 },
      visibility: 10000,
      pop: 0.63,
      rain: { '3h': 0.31 },
      sys: { pod: 'd' },
      dt_txt: '2022-04-21 09:00:00',
    },
    {
      dt: 1650542400,
      main: {
        temp: 7.35,
        feels_like: 6.31,
        temp_min: 7.35,
        temp_max: 7.35,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 997,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: { all: 100 },
      wind: { speed: 1.79, deg: 13, gust: 4.38 },
      visibility: 10000,
      pop: 0.47,
      rain: { '3h': 0.18 },
      sys: { pod: 'd' },
      dt_txt: '2022-04-21 12:00:00',
    },
    {
      dt: 1650553200,
      main: {
        temp: 7.27,
        feels_like: 6.28,
        temp_min: 7.27,
        temp_max: 7.27,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 998,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: { all: 100 },
      wind: { speed: 1.73, deg: 22, gust: 4.09 },
      visibility: 10000,
      pop: 0.2,
      rain: { '3h': 0.13 },
      sys: { pod: 'd' },
      dt_txt: '2022-04-21 15:00:00',
    },
    {
      dt: 1650564000,
      main: {
        temp: 7.03,
        feels_like: 5.6,
        temp_min: 7.03,
        temp_max: 7.03,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 998,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
      clouds: { all: 100 },
      wind: { speed: 2.15, deg: 15, gust: 5.14 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-04-21 18:00:00',
    },
    {
      dt: 1650574800,
      main: {
        temp: 6.7,
        feels_like: 4.91,
        temp_min: 6.7,
        temp_max: 6.7,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 998,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
      clouds: { all: 100 },
      wind: { speed: 2.5, deg: 25, gust: 5.64 },
      visibility: 10000,
      pop: 0.28,
      rain: { '3h': 0.24 },
      sys: { pod: 'n' },
      dt_txt: '2022-04-21 21:00:00',
    },
    {
      dt: 1650585600,
      main: {
        temp: 6.11,
        feels_like: 4.07,
        temp_min: 6.11,
        temp_max: 6.11,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 997,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
      clouds: { all: 100 },
      wind: { speed: 2.69, deg: 28, gust: 5.58 },
      visibility: 10000,
      pop: 0.44,
      rain: { '3h': 0.44 },
      sys: { pod: 'n' },
      dt_txt: '2022-04-22 00:00:00',
    },
    {
      dt: 1650596400,
      main: {
        temp: 5.65,
        feels_like: 3.35,
        temp_min: 5.65,
        temp_max: 5.65,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 996,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
      clouds: { all: 100 },
      wind: { speed: 2.91, deg: 27, gust: 5.1 },
      visibility: 10000,
      pop: 1,
      rain: { '3h': 1.06 },
      sys: { pod: 'n' },
      dt_txt: '2022-04-22 03:00:00',
    },
    {
      dt: 1650607200,
      main: {
        temp: 3.85,
        feels_like: 0.04,
        temp_min: 3.85,
        temp_max: 3.85,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 997,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: { all: 100 },
      wind: { speed: 4.73, deg: 72, gust: 7.85 },
      visibility: 1241,
      pop: 1,
      rain: { '3h': 2.09 },
      sys: { pod: 'd' },
      dt_txt: '2022-04-22 06:00:00',
    },
    {
      dt: 1650618000,
      main: {
        temp: 4.22,
        feels_like: 0.77,
        temp_min: 4.22,
        temp_max: 4.22,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 997,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: { all: 100 },
      wind: { speed: 4.23, deg: 88, gust: 10.49 },
      visibility: 311,
      pop: 0.82,
      rain: { '3h': 2.83 },
      sys: { pod: 'd' },
      dt_txt: '2022-04-22 09:00:00',
    },
    {
      dt: 1650628800,
      main: {
        temp: 4.99,
        feels_like: 2.09,
        temp_min: 4.99,
        temp_max: 4.99,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 997,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: { all: 100 },
      wind: { speed: 3.59, deg: 89, gust: 8.69 },
      visibility: 7757,
      pop: 1,
      rain: { '3h': 1.75 },
      sys: { pod: 'd' },
      dt_txt: '2022-04-22 12:00:00',
    },
    {
      dt: 1650639600,
      main: {
        temp: 4.53,
        feels_like: 1.9,
        temp_min: 4.53,
        temp_max: 4.53,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 996,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: { all: 100 },
      wind: { speed: 3.05, deg: 82, gust: 5.15 },
      visibility: 1734,
      pop: 0.8,
      rain: { '3h': 0.91 },
      sys: { pod: 'd' },
      dt_txt: '2022-04-22 15:00:00',
    },
    {
      dt: 1650650400,
      main: {
        temp: 4.6,
        feels_like: 3.37,
        temp_min: 4.6,
        temp_max: 4.6,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 995,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
      clouds: { all: 100 },
      wind: { speed: 1.59, deg: 76, gust: 2.94 },
      visibility: 10000,
      pop: 0.84,
      rain: { '3h': 0.98 },
      sys: { pod: 'n' },
      dt_txt: '2022-04-22 18:00:00',
    },
    {
      dt: 1650661200,
      main: {
        temp: 4.81,
        feels_like: 3.74,
        temp_min: 4.81,
        temp_max: 4.81,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 994,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
      clouds: { all: 100 },
      wind: { speed: 1.49, deg: 10, gust: 2.77 },
      visibility: 8902,
      pop: 1,
      rain: { '3h': 2.6 },
      sys: { pod: 'n' },
      dt_txt: '2022-04-22 21:00:00',
    },
    {
      dt: 1650672000,
      main: {
        temp: 5.33,
        feels_like: 4.03,
        temp_min: 5.33,
        temp_max: 5.33,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 993,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
      clouds: { all: 100 },
      wind: { speed: 1.74, deg: 16, gust: 3.08 },
      visibility: 3521,
      pop: 1,
      rain: { '3h': 1.26 },
      sys: { pod: 'n' },
      dt_txt: '2022-04-23 00:00:00',
    },
    {
      dt: 1650682800,
      main: {
        temp: 6.01,
        feels_like: 6.01,
        temp_min: 6.01,
        temp_max: 6.01,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 992,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
      clouds: { all: 100 },
      wind: { speed: 0.78, deg: 35, gust: 1.09 },
      visibility: 10000,
      pop: 0.83,
      rain: { '3h': 1.01 },
      sys: { pod: 'n' },
      dt_txt: '2022-04-23 03:00:00',
    },
    {
      dt: 1650693600,
      main: {
        temp: 6.76,
        feels_like: 6.08,
        temp_min: 6.76,
        temp_max: 6.76,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 992,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: { all: 100 },
      wind: { speed: 1.4, deg: 135, gust: 3.07 },
      visibility: 10000,
      pop: 0.96,
      rain: { '3h': 0.25 },
      sys: { pod: 'd' },
      dt_txt: '2022-04-23 06:00:00',
    },
    {
      dt: 1650704400,
      main: {
        temp: 7.39,
        feels_like: 7.39,
        temp_min: 7.39,
        temp_max: 7.39,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 993,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: { all: 100 },
      wind: { speed: 1.27, deg: 123, gust: 3.84 },
      visibility: 10000,
      pop: 1,
      rain: { '3h': 0.91 },
      sys: { pod: 'd' },
      dt_txt: '2022-04-23 09:00:00',
    },
    {
      dt: 1650715200,
      main: {
        temp: 7.88,
        feels_like: 7.88,
        temp_min: 7.88,
        temp_max: 7.88,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 993,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: { all: 100 },
      wind: { speed: 0.78, deg: 131, gust: 1.08 },
      visibility: 10000,
      pop: 0.96,
      rain: { '3h': 0.72 },
      sys: { pod: 'd' },
      dt_txt: '2022-04-23 12:00:00',
    },
    {
      dt: 1650726000,
      main: {
        temp: 8.22,
        feels_like: 8.22,
        temp_min: 8.22,
        temp_max: 8.22,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 993,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: { all: 100 },
      wind: { speed: 0.55, deg: 77, gust: 1.05 },
      visibility: 10000,
      pop: 0.6,
      rain: { '3h': 1.2 },
      sys: { pod: 'd' },
      dt_txt: '2022-04-23 15:00:00',
    },
    {
      dt: 1650736800,
      main: {
        temp: 8.19,
        feels_like: 8.19,
        temp_min: 8.19,
        temp_max: 8.19,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 993,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
      clouds: { all: 100 },
      wind: { speed: 0.54, deg: 220, gust: 0.76 },
      visibility: 10000,
      pop: 0.63,
      rain: { '3h': 0.23 },
      sys: { pod: 'n' },
      dt_txt: '2022-04-23 18:00:00',
    },
    {
      dt: 1650747600,
      main: {
        temp: 7.98,
        feels_like: 7.98,
        temp_min: 7.98,
        temp_max: 7.98,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 993,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
      clouds: { all: 100 },
      wind: { speed: 0.68, deg: 308, gust: 0.64 },
      visibility: 10000,
      pop: 0.07,
      sys: { pod: 'n' },
      dt_txt: '2022-04-23 21:00:00',
    },
    {
      dt: 1650758400,
      main: {
        temp: 7.93,
        feels_like: 7.93,
        temp_min: 7.93,
        temp_max: 7.93,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 992,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
      clouds: { all: 100 },
      wind: { speed: 0.64, deg: 41, gust: 0.64 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'n' },
      dt_txt: '2022-04-24 00:00:00',
    },
    {
      dt: 1650769200,
      main: {
        temp: 7.59,
        feels_like: 6.48,
        temp_min: 7.59,
        temp_max: 7.59,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 992,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
      clouds: { all: 96 },
      wind: { speed: 1.9, deg: 93, gust: 2.14 },
      visibility: 10000,
      pop: 0.11,
      sys: { pod: 'n' },
      dt_txt: '2022-04-24 03:00:00',
    },
    {
      dt: 1650780000,
      main: {
        temp: 10.58,
        feels_like: 10.07,
        temp_min: 10.58,
        temp_max: 10.58,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 991,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
      clouds: { all: 87 },
      wind: { speed: 3.06, deg: 128, gust: 9.33 },
      visibility: 10000,
      pop: 0,
      sys: { pod: 'd' },
      dt_txt: '2022-04-24 06:00:00',
    },
    {
      dt: 1650790800,
      main: {
        temp: 15,
        feels_like: 14.54,
        temp_min: 15,
        temp_max: 15,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 991,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: { all: 96 },
      wind: { speed: 5.05, deg: 143, gust: 7.99 },
      visibility: 10000,
      pop: 0.24,
      rain: { '3h': 0.13 },
      sys: { pod: 'd' },
      dt_txt: '2022-04-24 09:00:00',
    },
    {
      dt: 1650801600,
      main: {
        temp: 18.46,
        feels_like: 17.9,
        temp_min: 18.46,
        temp_max: 18.46,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 990,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: { all: 88 },
      wind: { speed: 5.62, deg: 167, gust: 9.13 },
      visibility: 10000,
      pop: 0.84,
      rain: { '3h': 0.57 },
      sys: { pod: 'd' },
      dt_txt: '2022-04-24 12:00:00',
    },
    {
      dt: 1650812400,
      main: {
        temp: 17.91,
        feels_like: 17.45,
        temp_min: 17.91,
        temp_max: 17.91,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 988,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: { all: 69 },
      wind: { speed: 6.97, deg: 156, gust: 12.3 },
      visibility: 9690,
      pop: 0.99,
      rain: { '3h': 1.7 },
      sys: { pod: 'd' },
      dt_txt: '2022-04-24 15:00:00',
    },
    {
      dt: 1650823200,
      main: {
        temp: 13.9,
        feels_like: 13.33,
        temp_min: 13.9,
        temp_max: 13.9,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 990,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
      clouds: { all: 85 },
      wind: { speed: 3.19, deg: 178, gust: 7.97 },
      visibility: 10000,
      pop: 1,
      rain: { '3h': 0.41 },
      sys: { pod: 'n' },
      dt_txt: '2022-04-24 18:00:00',
    },
  ],
  city: {
    id: 756135,
    name: 'Warsaw',
    coord: { lat: 52.232, lon: 21.0067 },
    country: 'PL',
    population: 1000000,
    timezone: 7200,
    sunrise: 1650339019,
    sunset: 1650389972,
  },
};
const testt = test.list;
const dt = test.list.map(() => {
  return test.list.dt;
});
console.log(testt[1]);
// console.log(Object.values(testArray));
// function getKeyByValue(object, value) {
//   return Object.keys(object).find(key => object[key] === value);
// }
// console.log(getKeyByValue(testArray, 'dt'));
//create chart
const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Temperature',
      backgroundColor: 'orange',
      borderColor: 'orange',
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

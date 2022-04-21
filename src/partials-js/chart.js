'use strict';
import Chart from 'chart.js/auto';
//API Key
const key = '86882c431a5c1fa03f48939e3b313043&units=metric';
// https://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=3&appid=86882c431a5c1fa03f48939e3b313043&units=metric
// https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&cnt=5&appid=86882c431a5c1fa03f48939e3b313043&units=metric
// https://api.openweathermap.org/data/2.5/onecall?lat=57&lon=-2.15&exclude=daily&appid=86882c431a5c1fa03f48939e3b313043&units=metric
//DOM imports
const ctx = document.getElementById('myChart');
//Test Array
const apiResponse = {
  lat: 57,
  lon: -2.15,
  timezone: 'Europe/London',
  timezone_offset: 3600,
  current: {
    dt: 1650486846,
    sunrise: 1650430062,
    sunset: 1650482818,
    temp: 6.01,
    feels_like: 4.26,
    pressure: 1021,
    humidity: 99,
    dew_point: 5.86,
    uvi: 0,
    clouds: 100,
    visibility: 10000,
    wind_speed: 2.31,
    wind_deg: 150,
    wind_gust: 2.46,
    weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }],
  },
  daily: [
    {
      dt: 1650456000,
      sunrise: 1650430062,
      sunset: 1650482818,
      moonrise: 1650412740,
      moonset: 1650435180,
      moon_phase: 0.64,
      temp: { day: 9.91, min: 5.93, max: 9.91, night: 6.21, eve: 7.56, morn: 6.58 },
      feels_like: { day: 7.74, night: 4.46, eve: 5.15, morn: 5.62 },
      pressure: 1021,
      humidity: 79,
      dew_point: 5.81,
      wind_speed: 4.64,
      wind_deg: 144,
      wind_gust: 6.29,
      weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
      clouds: 6,
      pop: 0,
      uvi: 3.66,
    },
    {
      dt: 1650542400,
      sunrise: 1650516309,
      sunset: 1650569347,
      moonrise: 1650504480,
      moonset: 1650524040,
      moon_phase: 0.68,
      temp: { day: 10.14, min: 6.39, max: 10.32, night: 6.87, eve: 8.46, morn: 7.11 },
      feels_like: { day: 9.12, night: 4.16, eve: 5.93, morn: 5.6 },
      pressure: 1022,
      humidity: 73,
      dew_point: 5.08,
      wind_speed: 5.43,
      wind_deg: 48,
      wind_gust: 9.46,
      weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03d' }],
      clouds: 30,
      pop: 0,
      uvi: 3.7,
    },
    {
      dt: 1650628800,
      sunrise: 1650602558,
      sunset: 1650655876,
      moonrise: 1650594960,
      moonset: 1650614340,
      moon_phase: 0.71,
      temp: { day: 10.59, min: 5.53, max: 10.85, night: 7.31, eve: 8.93, morn: 6.06 },
      feels_like: { day: 9.64, night: 4.23, eve: 6.13, morn: 2.69 },
      pressure: 1021,
      humidity: 74,
      dew_point: 5.58,
      wind_speed: 6.45,
      wind_deg: 33,
      wind_gust: 10.56,
      weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
      clouds: 6,
      pop: 0,
      uvi: 4.1,
    },
    {
      dt: 1650715200,
      sunrise: 1650688807,
      sunset: 1650742404,
      moonrise: 1650683820,
      moonset: 1650705780,
      moon_phase: 0.75,
      temp: { day: 9.81, min: 6.86, max: 9.81, night: 7.17, eve: 8.8, morn: 7.42 },
      feels_like: { day: 7.16, night: 4.87, eve: 6.59, morn: 5.01 },
      pressure: 1020,
      humidity: 79,
      dew_point: 5.82,
      wind_speed: 5.73,
      wind_deg: 63,
      wind_gust: 10.42,
      weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
      clouds: 91,
      pop: 0,
      uvi: 3.84,
    },
    {
      dt: 1650801600,
      sunrise: 1650775057,
      sunset: 1650828933,
      moonrise: 1650771660,
      moonset: 1650797820,
      moon_phase: 0.78,
      temp: { day: 8.73, min: 6.3, max: 9.23, night: 6.3, eve: 7.55, morn: 7.19 },
      feels_like: { day: 6.28, night: 6.3, eve: 5.39, morn: 4.3 },
      pressure: 1019,
      humidity: 82,
      dew_point: 5.36,
      wind_speed: 5.03,
      wind_deg: 5,
      wind_gust: 6.84,
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: 80,
      pop: 0.66,
      rain: 0.91,
      uvi: 3.02,
    },
    {
      dt: 1650888000,
      sunrise: 1650861309,
      sunset: 1650915462,
      moonrise: 1650858960,
      moonset: 1650889800,
      moon_phase: 0.82,
      temp: { day: 8.97, min: 4.97, max: 9.03, night: 5.69, eve: 8.14, morn: 5.39 },
      feels_like: { day: 7.37, night: 3.9, eve: 7.18, morn: 3.83 },
      pressure: 1019,
      humidity: 63,
      dew_point: 1.86,
      wind_speed: 2.85,
      wind_deg: 77,
      wind_gust: 3.45,
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: 16,
      pop: 0.54,
      rain: 0.11,
      uvi: 3.91,
    },
    {
      dt: 1650974400,
      sunrise: 1650947561,
      sunset: 1651001991,
      moonrise: 1650946020,
      moonset: 1650981600,
      moon_phase: 0.85,
      temp: { day: 8.28, min: 4.43, max: 8.81, night: 7.27, eve: 8.2, morn: 5.52 },
      feels_like: { day: 4.85, night: 4.24, eve: 5.23, morn: 1.95 },
      pressure: 1018,
      humidity: 80,
      dew_point: 4.64,
      wind_speed: 6.76,
      wind_deg: 328,
      wind_gust: 9.58,
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: 88,
      pop: 0.38,
      rain: 0.53,
      uvi: 4,
    },
    {
      dt: 1651060800,
      sunrise: 1651033815,
      sunset: 1651088519,
      moonrise: 1651032840,
      moonset: 1651073100,
      moon_phase: 0.89,
      temp: { day: 8.21, min: 5.99, max: 8.6, night: 6.5, eve: 8.12, morn: 6.85 },
      feels_like: { day: 6.39, night: 4.94, eve: 6.05, morn: 3.76 },
      pressure: 1024,
      humidity: 66,
      dew_point: 1.92,
      wind_speed: 6.08,
      wind_deg: 343,
      wind_gust: 8.21,
      weather: [{ id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' }],
      clouds: 100,
      pop: 0,
      uvi: 4,
    },
  ],
};
const temp = apiResponse.daily.map(element => {
  return element.temp.day;
});
console.log(temp);

const dateTimestamp = apiResponse.daily.map(element => {
  return element.dt;
});

const pressure = apiResponse.daily.map(element => {
  return element.pressure;
});

const labels = dateTimestamp;

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Temperature, C°',
      backgroundColor: '#FF6B09',
      borderColor: '#FF6B09',
      data: temp,
    },
    {
      label: 'Humidity, %',
      backgroundColor: '#0906EB',
      borderColor: '#0906EB',
      data: pressure,
    },
    {
      label: 'Wind Speed, m/s',
      backgroundColor: '#EA9A05',
      borderColor: '#EA9A05',
      data: pressure,
    },
    {
      label: 'Atmosphere Pressure, m/m',
      backgroundColor: '#067806',
      borderColor: '#067806',
      data: pressure,
    },
  ],
};

const config = {
  type: 'line',
  data: data,
  options: {
    layout: {
      padding: 20,
    },
  },
};
const myChart = new Chart(document.getElementById('myChart'), config);

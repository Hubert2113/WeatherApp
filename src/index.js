import './sass/main.scss';
import './partials-js/chart';
import { getCityWeather, citiesData, getDefaultCityData } from './partials-js/data_fetch';
import axios from 'axios';

let defaultCity = [];

document.addEventListener('DOMContentLoaded', getDefaultCityData(defaultCity));
// $searchInput.addEventListener('input', async ev => {
//   $searchBtn.addEventListener('click', await getCityWeather(ev));
// });
console.log(defaultCity);

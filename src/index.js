import './sass/main.scss';
import './partials-js/chart';
<<<<<<< Updated upstream
import {getCityWeather, citiesData, getDefaultCityData} from './partials-js/data_fetch';
=======
import {getCityWeather, citiesData, getDefultCityData} from './partials-js/data_fetch';
>>>>>>> Stashed changes
import axios from 'axios';

let defaultCity = [];

<<<<<<< Updated upstream
document.addEventListener("DOMContentLoaded", getDefaultCityData());
=======
document.addEventListener("DOMContentLoaded", getDefultCityData());
>>>>>>> Stashed changes

$searchInput.addEventListener("input", async (ev) => {
    $searchBtn.addEventListener("click", await getCityWeather(ev));
});

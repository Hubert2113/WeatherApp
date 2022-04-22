// import './sass/main.scss';
import {
  getCityWeather,
  citiesData,
  getDefaultCityData,
  getInputValue,
  defaultCity,
  inputValue,
} from './data_fetch';

import moment from 'moment';

const cityDateTag = document.querySelector('div.date-container-bg');

//console.log(response.city.sunrise);
//console.log(response.city.sunset);

export function shiftInSecondsConverter(secondsFromUTC, desiredFormat) {
  const timeInMinutes = secondsFromUTC / 60;
  const currTime = moment().utcOffset(timeInMinutes).format(`${desiredFormat}`);
  return currTime;
}

export function unixTimeConverterHhMm(unixTime) {
  let date = new Date(unixTime * 1000);
  let hours = date.getHours();
  let minutes = '0' + date.getMinutes();
  let seconds = '0' + date.getSeconds();

  let formattedTime = hours + ':' + minutes.substr(-2); /*+ ':' + seconds.substr(-2)*/

  return formattedTime;
}

//unixTimeConverterHhMm(response.city.sunrise);

export function createDateTimeTags(backendObjects, callback1, callback2) {
  const markup = /*backendObjects
    .map(
      backendObj =>*/
        `<div class = "city-date__day">
            <p class = "">${callback1((backendObjects.city.timezone), 'Do ddd')}</p>
        </div>
        <div class = "city-date__month-and-time">
            <p class = "">${callback1((backendObjects.city.timezone), 'MMMM')}</p>
            <p class = "">${callback1((backendObjects.city.timezone), 'h:mm:ss')}</p>
        </div>
        <div class = "city-date__sunrise-and-sunset">
            <p class = "">${callback2(backendObjects.city.sunrise)}</p>
            <p class = "">${callback2(backendObjects.city.sunset)}</p>
        </div>`
    // ,)
    // .join('');
  cityDateTag.insertAdjacentHTML('beforeend', markup);
  console.log(backendObjects.city.timezone);
}

// createDateTimeTags(cityData, shiftInSecondsConverter, unixTimeConverterHhMm);

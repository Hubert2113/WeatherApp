import './sass/main.scss';

import _ from 'lodash';
import './partials-js/chart';
import { historyAddCity, historyCityVieve, HistoryCityDelete } from './partials-js/history_city';
import { getCityWeather } from './partials-js/data_fetch';

const dane = [
  {
    name: 'londyn',
  },
];
historyAddCity(dane);
console.log(historyCityVieve());
HistoryCityDelete(0);

console.log(getCityWeather('Londyn'));




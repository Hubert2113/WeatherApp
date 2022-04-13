import './sass/main.scss';
import _ from 'lodash';

import { getCityWeather } from './partials-js/data_fetch';
import { saveStorage, loadStorage, removeStorage } from './partials-js/storage';
import { historyAddCity, historyCityVieve } from './partials-js/history_city';

saveStorage('test', 'jakas nowa zmienna');
const wartosc = loadStorage('test');
console.log(wartosc);

console.log(localStorage.length);
removeStorage('test');

// console.log(historyCityVieve());

// console.log(getCityWeather('Londyn'));

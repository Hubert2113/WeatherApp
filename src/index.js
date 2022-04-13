import './sass/main.scss';
import _ from 'lodash';

import { getCityWeather } from './partials-js/data_fetch';
import { saveStorage, loadStorage, removeStorage } from './partials-js/storage';
// import from './partials-js/history_city'

saveStorage('test', 'jakas nowa zmienna');
const wartosc = loadStorage('test');
console.log(wartosc);
removeStorage('test');
// console.log(getCityWeather('Londyn'));

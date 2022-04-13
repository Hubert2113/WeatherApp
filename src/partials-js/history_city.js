import { saveStorage, loadStorage, removeStorage } from './storage';

export function historyAddCity(dane) {
  const storageLength = localStorage.length;
  console.log(city[name]);
  saveStorage(storageLength, city.name);
}

export function historyCityVieve() {
  const storageLength = localStorage.length;
  const arrayOfCity = [];
  for (let index = 0; index < storageLength; index++) {
    const element = loadStorage(index);
    arrayOfCity.push(element);
  }
  return arrayOfCity;
}

const dane = [
  {
    name: 'London',
    local_names: {
      ascii: 'London',
      feature_name: 'London',
      pl: 'Londyn',
    },
    lat: 51.5085,
    lon: -0.1257,
    country: 'GB',
  },
];

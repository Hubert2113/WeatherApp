import { saveStorage, loadStorage, removeStorage } from './storage';

export function historyAddCity(dane) {
  const storageLength = localStorage.length;
  saveStorage(storageLength, dane[0].name);
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

export function HistoryCityDelete(index) {
  removeStorage(index);
}

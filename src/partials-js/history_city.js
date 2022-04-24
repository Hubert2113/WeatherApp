// import { cityData } from '..';
import { saveStorage, loadStorage, removeStorage } from './storage';
// import { } from "./data_fetch";

export const arrayOfKey = [];

export function historyAddCity(cityData) {
  saveStorage(cityData.city.name, cityData);
}

export function historyCityVieve(reload) {
  //sprawdzenie długości local storage
  const storageLength = localStorage.length;
  // const arrayOfKey = [];
  for (let index = 0; index < storageLength; index++) {
    arrayOfKey.push(window.localStorage.key(index));
  }
  GenerateViewHistory(arrayOfKey, reload);
}

export function HistoryCityDelete(index) {
  removeStorage(index);
}

function GenerateViewHistory(arrayOfKey, reload) {
  const historySection = document.querySelector('.history');

  const history_arrow = document.createElement('div');
  let historyArowCode = `
    <button class="history_arrow">
      <
    </button>`;
  history_arrow.innerHTML = historyArowCode;
  historySection.append(history_arrow);

  arrayOfKey.forEach(el => {
    let history = document.createElement('div');
    history.classList.add('history_button');

    let historyArray = null;
    historyArray = `
    <a class="history_button_link" href="${el}">
      ${loadStorage(el).city.name}
    </a>
    <a class="history_button_delete" href="${el}">X</a>`;
    history.innerHTML = historyArray;

    http: historySection.append(history);
  });
  const history_arrow2 = document.createElement('div');
  historyArowCode = `
    <button class="history_arrow">
      >
    </button>`;
  history_arrow2.innerHTML = historyArowCode;
  historySection.append(history_arrow2);

  if (reload === 1) {
    setTimeout(() => {
      location.reload();
    }, 500);
  }
}

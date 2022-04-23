import { saveStorage, loadStorage, removeStorage } from './storage';
// import { } from "./data_fetch";


export const arrayOfKey = [];


export function historyAddCity(cityData) {
  saveStorage(cityData.city.id, cityData);
}

export function historyCityVieve() {
  //sprawdzenie długości local storage
  const storageLength = localStorage.length;
  // const arrayOfKey = [];
  for (let index = 0; index < storageLength; index++) {
    arrayOfKey.push(window.localStorage.key(index));
  }
  GenerateViewHistory(arrayOfKey);
}

export function HistoryCityDelete(index) {
  removeStorage(index);
}

function GenerateViewHistory(arrayOfKey) {
  const $historySection = document.querySelector('.history');
  const history_arrow = document.createElement('div');
  let historyArowCode = `
    <button class="history_arrow">
      <
    </button>`;
  history_arrow.innerHTML = historyArowCode;
  $historySection.append(history_arrow);

  arrayOfKey.forEach(el => {
    const history = document.createElement('div');
    history.classList.add('history_button');

    const historyArray = `
    <a class="history_button_link" href="${el}">
      ${loadStorage(el).city.name}
    </a>`;
    history.innerHTML = historyArray;

    $historySection.append(history);
  });
  const history_arrow2 = document.createElement('div');
  historyArowCode = `
    <button class="history_arrow">
      >
    </button>`;
  history_arrow2.innerHTML = historyArowCode;
  $historySection.append(history_arrow2);
}

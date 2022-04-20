import { saveStorage, loadStorage, removeStorage } from './storage';

export function historyAddCity(defaultCity) {
  const storageLength = localStorage.length;
  const dane = defaultCity;
  saveStorage(dane.city.id, dane.city.name);
}

export function historyCityVieve() {
  //sprawdzenie długości local storage
  const storageLength = localStorage.length;

  const arrayOfKey = [];
  for (let index = 0; index < storageLength; index++) {
    arrayOfKey.push(window.localStorage.key(index));
  }
  // console.log('wynik kluczy -> ');
  // console.log(arrayOfKey);
  GenerateViewHistory(arrayOfKey);
  // return arrayOfCity;
}

export function HistoryCityDelete(index) {
  removeStorage(index);
}

function GenerateViewHistory(arrayOfKey) {
  const $historySection = document.querySelector('.history');
  // console.log($historySection);
  // console.log('przekazane dene -> ' + arrayOfKey);

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
      ${loadStorage(el)}
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

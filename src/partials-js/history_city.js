import { saveStorage, loadStorage, removeStorage } from './storage';

export function historyAddCity(dane) {
  for (let index = 0; index < 3; index++) {
    const storageLength = localStorage.length;
    saveStorage(storageLength, dane[0].name);
  }
}

export function historyCityVieve() {
  const storageLength = localStorage.length;
  const arrayOfCity = [];
  for (let index = 0; index < storageLength; index++) {
    const element = loadStorage(index);
    arrayOfCity.push(element);
  }
  GenerateViewHistory(arrayOfCity);
  return arrayOfCity;
}

export function HistoryCityDelete(index) {
  removeStorage(index);
}

function GenerateViewHistory(arrayOfCity) {
  const $historySection = document.querySelector('.history');
  console.log($historySection);
  console.log('przekazane dene -> ' + arrayOfCity);

   const history_arrow = document.createElement('div');
  history_arrow.classList.add('history_arrow arrow_left');
  $historySection.append(history_arrow);

  arrayOfCity.forEach((el) => {
    const history = document.createElement('div');
    history.classList.add('history_button');

    const historyArray = `
    <p class="info-item">
      ${el}
    </p>`;
    history.innerHTML = historyArray;

    $historySection.append(history);

    const history_arrow2 = document.createElement('div');
  history_arrow.classList.add('history_arrow arrow_rigth');
  $historySection.append(history_arrow2);
  });
}

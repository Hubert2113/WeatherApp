import { saveStorage, loadStorage, removeStorage } from './storage';

export function historyAddCity(dane) {
  //petla tylko dla testów
  for (let index = 0; index < 3; index++) {
    // let sumKontrol = true;
    // let flaga = 0;
    const storageLength = localStorage.length;
    // while (sumKontrol)
      // if (loadStorage(index + flaga) === undefined) {
        saveStorage(storageLength, dane[0].name);
        // sumKontrol = false;
      // } else {
        // flaga++;
      // }
  }
}

export function historyCityVieve() {
  //sprawdzenie długości local storage
  const storageLength = localStorage.length;

  //tworzenie tablicy miast i ich indeksu
  const arrayOfCity = [];
  for (let index = 0; index < storageLength; index++) {
    const element = loadStorage(index);
    arrayOfCity[index] = [];
    for (let j = 0; j < 2; j++) {
      if (j === 0) {
        arrayOfCity[index][j] = index;
      } else {
        arrayOfCity[index][j] = element;
      }
    }
  }
  console.log('wynik tablicy -> ' + arrayOfCity);
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
  let historyArowCode = `
    <button class="history_arrow">
      <
    </button>`;
  history_arrow.innerHTML = historyArowCode;
  $historySection.append(history_arrow);

  arrayOfCity.forEach(el => {
    const history = document.createElement('div');
    history.classList.add('history_button');

    const historyArray = `
    <a class="history_button_link" href="${el}">
      ${el}
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

import { loadStorage } from './storage';
import { arrayOfKey } from './history_city';

export function GenerateView5Days() {
  const $5DaysSection = document.querySelector('.Days5');
  console.log($5DaysSection);
  console.log(arrayOfKey);

  const $5days_arrow = document.createElement('div');
  let $5days_arrowCode = `
    <button class="5Days_arrow">
      <
    </button>`;
  $5days_arrow.innerHTML = $5days_arrowCode;
  $5DaysSection.append($5days_arrow);

  arrayOfKey.forEach(el => {
    const Days5 = document.createElement('div');
    Days5.classList.add('Days5_viev');

    const days5Array = `
    <p class="Days5_viev_day">
      ${loadStorage(el).city.name}
    </p>`;
    Days5.innerHTML = days5Array;

    $5DaysSection.append(Days5);
  });

  const $5days_arrow2 = document.createElement('div');
  let $5days_arrowCode2 = `
    <button class="5Days_arrow">
      <
    </button>`;
  $5days_arrow2.innerHTML = $5days_arrowCode2;
  $5DaysSection.append($5days_arrow2);
}

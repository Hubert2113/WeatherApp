import { loadStorage } from './storage';
import { arrayOfKey } from './history_city';

export function GenerateView5Days() {
  const $5DaysSection = document.querySelector('.Days5');
  const $vievIsDone = document.querySelector('.Days5_viev');

  if (!$vievIsDone) {
    $5DaysSection.classList.remove('Days5_hiden');
    arrayOfKey.forEach(el => {
      for (let index = 0; index < 33; index += 8) {
        const Days5 = document.createElement('div');
        Days5.classList.add('Days5_viev');
        let data = new Date(loadStorage(el).list[index].dt_txt);
        let dataWeek = data.toLocaleDateString('en-us', {
          weekday: 'long',
        });
        let dataDay = data.toLocaleDateString('en-us', {
          month: 'short',
          day: 'numeric',
        });
        const days5Array = `
      <div class="Days5_viev__week">
    <p>${dataWeek}</p>
    </div>
    <div class="Days5_viev__day">
    <p>${dataDay}</p>
    </div>
    <div class="Days5_viev__icon Days5_viev__icon${loadStorage(el).list[index].weather[0].icon}">
    </div>
    <div class="Days5_viev__temp">
    <p>min</p>
    <p>max</p>
    </div>
    <div class="Days5_viev__tempValue">
    <p>${Math.round(loadStorage(el).list[index].main.temp_min)} &deg</p>
    <p>${Math.round(loadStorage(el).list[index].main.temp_max)} &deg</p>
    </div>`;
        Days5.innerHTML = days5Array;
        $5DaysSection.append(Days5);
      }
    });
  }
  //=====================kod na potencjalne strzałki==================
  // const $5days_arrow = document.createElement('div');
  // let $5days_arrowCode = `
  //   <button class="5Days_arrow">
  //     <
  //   </button>`;
  // $5days_arrow.innerHTML = $5days_arrowCode;
  // $5DaysSection.append($5days_arrow);
  //=====================kod na potencjalne strzałki==================

  //=====================kod na potencjalne strzałki==================
  // const $5days_arrow2 = document.createElement('div');
  // let $5days_arrowCode2 = `
  //   <button class="5Days_arrow">
  //     <
  //   </button>`;
  // $5days_arrow2.innerHTML = $5days_arrowCode2;
  // $5DaysSection.append($5days_arrow2);
  //=====================kod na potencjalne strzałki==================
}

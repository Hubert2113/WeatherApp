import { loadStorage } from './storage';
import { cityData } from '../index';

export function Day5Hiden() {
  const $5DaysSection = document.querySelector('.Days5');
  const $5DaysCityNAme = document.querySelector('.Day5CityName');
  const $Today = document.querySelector('.weather-container');
  const $Timer = document.querySelector('.date-container-bg');

  $5DaysSection.classList.add('Days5_hiden');
  $5DaysCityNAme.classList.add('Days5_hiden');
  $Today.classList.remove('Days5_hiden');
  $Timer.classList.remove('Days5_hiden');

  while ($5DaysSection.firstChild) {
    $5DaysSection.removeChild($5DaysSection.firstChild);
  }
  while ($5DaysCityNAme.firstChild) {
    $5DaysCityNAme.removeChild($5DaysCityNAme.firstChild);
  }
}

export function GenerateView5Days() {
  const $5DaysSection = document.querySelector('.Days5');
  const $5DaysCityNAme = document.querySelector('.Day5CityName');
  const $Today = document.querySelector('.weather-container');
  const $Timer = document.querySelector('.date-container-bg');

  const $vievIsDone = document.querySelector('.Days5_viev');

  if ($5DaysSection.classList.contains('Days5_hiden')) {
    $5DaysSection.classList.remove('Days5_hiden');
    $5DaysCityNAme.classList.remove('Days5_hiden');
    $Today.classList.add('Days5_hiden');
    $Timer.classList.add('Days5_hiden');
  }

  if (!$vievIsDone) {
    const cityNAme = document.createElement('div');
    const nameCity = `<p>${cityData.city.name}, ${cityData.city.country}</p>`;
    cityNAme.innerHTML = nameCity;
    $5DaysCityNAme.append(cityNAme);

    for (let index = 0; index < 33; index += 8) {
      const Days5 = document.createElement('div');
      Days5.classList.add('Days5_viev');
      let data = new Date(cityData.list[index].dt_txt);
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
    <div class="Days5_viev__icon Days5_viev__icon${cityData.list[index].weather[0].icon}">
    </div>
    <div class="Days5_viev__temp">
    <p>min</p>
    <p>max</p>
    </div>
    <div class="Days5_viev__tempValue">
    <p>${Math.round(cityData.list[index].main.temp_min)} &deg</p>
    <p>${Math.round(cityData.list[index].main.temp_max)} &deg</p>
    </div>
    <div class="Days5_viev__moreInfo">
    <a href="${cityData.city.name}">more info</a>
    </div>`;
      Days5.innerHTML = days5Array;
      $5DaysSection.append(Days5);
    }
  }
}

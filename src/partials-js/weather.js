import { cityData } from '../index';

export function mainWeather() {
  const city_name = cityData.city.name;
  const current_temp = cityData.list[0].main.temp;
  const min_temp = cityData.list[0].main.temp_min;
  const max_temp = cityData.list[0].main.temp_max;

  const $todaySection = document.querySelector('.weather-container');
  const today_section = `
    <p>${city_name}</p>
    <p>${Math.round(current_temp)}&deg</p>
    <div class="today_temp_txt">
    <p>min</p>
    <p>max</p>
    </div>
    <div class="today_temp_value">
    <p>${Math.round(min_temp)} &deg</p>
    <p>${Math.round(max_temp)} &deg</p>
    `;
  $todaySection.innerHTML = today_section;
}

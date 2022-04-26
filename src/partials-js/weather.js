import { cityData } from '../index';

export function mainWeather() {
  const city_name = cityData.city.name;
  const current_temp = cityData.list[0].main.temp;
  const min_temp = cityData.list[0].main.temp_min;
  const max_temp = cityData.list[0].main.temp_max;

  const $todaySection = document.querySelector('.weather-container');
  const today_section = `
    <p class="weather_section_city_name">${city_name}</p>
    <p class="today_current_temp">${Math.round(current_temp)}&deg</p>
    <div>
    <p class="today_temp_txt">min</p>
    <p class="today_temp_txt">max</p>
    </div>
    <div>
    <p class="today_temp_value">${Math.round(min_temp)} &deg</p>
    <p class="today_temp_value">${Math.round(max_temp)} &deg</p>
    `;
  $todaySection.innerHTML = today_section;
}

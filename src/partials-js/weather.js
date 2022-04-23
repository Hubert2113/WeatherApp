// import { loadStorage } from './storage';
// import { arrayOfKey } from './history_city';

// //const body = document.body;
// //const daysBtn = document.querySelector('#Days5Btn');
// //const changeBg = () => {
//   //document.body.style.backgroundImage = "url('../images/bg-5days.jpg')";
// //};
// //daysBtn.addEventListener('click', changeBg);



// export function GenerateTodayView() {
//   const $todaySection = document.querySelector('.weather-container');
//   const $not_active = document.querySelector('.section-not-active');

//   if (!$not_active) {
//     $todaySection.classList.remove('section-not-active');
//     arrayOfKey.forEach(el => {
//       for (let index = 0; index < 33; index += 1) {
//         const today = document.createElement('div');
//         today.classList.add('today_view');
//         let date = new Date(loadStorage(el).list[index].dt_txt);
//         let dateToday = date.toLocaleDateString('en-us', {
//           month: 'short',
//           day: 'numeric',
//         });

// const todayWeather = `
// <div class="today_view__day">
// <p>${dateToday}</p>
// </div>
// <div class="today_view__icon today_view__icon${loadStorage(el).list[index].weather[0].icon}">
// </div>
// <div class="today_view__temp">
// <p>min</p>
// <p>max</p>
// </div>
// <div class="today_view__tempValue">
// <p>${Math.round(loadStorage(el).list[index].main.temp_min)} &deg</p>
// <p>${Math.round(loadStorage(el).list[index].main.temp_max)} &deg</p>
// </div>`}})}}
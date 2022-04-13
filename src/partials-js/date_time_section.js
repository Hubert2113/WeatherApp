const cityDateTag = document.querySelector('section.city-date');

console.log(response.city.sunrise);
console.log(response.city.sunset);

function unixTimeConverter(unixTime) {
  let date = new Date(unixTime * 1000);
  let hours = date.getHours();
  let minutes = '0' + date.getMinutes();
  let seconds = '0' + date.getSeconds();

  let formattedTime = hours + ':' + minutes.substr(-2); /*+ ':' + seconds.substr(-2)*/

  return formattedTime;
}

unixTimeConverter(response.city.sunrise);

function createGalleryTags(backendObjects, callback) {
  const markup = backendObjects
    .map(
      backendObj =>
        `<div class = "city-date__container">
            <div class = "city-date__day">
                <p class = "">8th Sat</p>
            </div>
            <div class = "city-date__month-and-time">
                <p class = "">February</p>
                <p class = "">21:30:56</p>
            </div>
            <div class = "city-date__sunrise-and-sunset">
                <p class = "">${callback(backendObjects.city.sunrise)}</p>
                <p class = "">${callback(backendObjects.city.sunset)}</p>
            </div>
        </div>`,
    )
    .join('');
  cityDateTag.insertAdjacentHTML('beforeend', markup);
}

createGalleryTags(response, unixTimeConverter);

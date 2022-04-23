//const $todaySection = document.querySelector('.weather-container');
//const $5DaysSection = document.querySelector('.Days5');
//const $section_active = document.querySelector('.section-active');
//const $section_not_active = document.querySelector('.section-not-active');

export function setActive() {
// Get the container element
var btnContainer = document.getElementById("weather-buttons-container");

// Get all buttons with class="days-btn" inside the container
var btns = btnContainer.getElementsByClassName("days-btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("section-active");
    current[0].className = current[0].className.replace("section-active", "section-not-active");
    this.className += "section-active"; 
});
}
}
//const handleClick = (event) => {
  //console.log("event: ", event);
  //console.log("event type: ", event.type);
  //console.log("currentTarget: ", event.currentTarget);
//};

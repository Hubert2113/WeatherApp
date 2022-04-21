const body = document.body;
const daysBtn = document.querySelector('#Days5Btn');
const changeBg = () => {
  document.body.style.backgroundImage = "url('../images/bg-5days.jpg')";
};
daysBtn.addEventListener('click', changeBg);

const bodyRef = document.querySelector('body');
const startRef = document.querySelector('.start-btn');
const stopRef = document.querySelector('.stop-btn');
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let intervalId;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeBcg = function () {
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
    startRef.setAttribute('disabled', true);
  }, 1000);
};
const stopChangeBcg = function () {
  clearInterval(intervalId);
  startRef.removeAttribute('disabled');
};

startRef.addEventListener('click', changeBcg);
stopRef.addEventListener('click', stopChangeBcg);

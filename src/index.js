const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('[data-action="start"]');
const stoptBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector("body");

stoptBtn.disabled = true;
let intervalId = null;
const COLOR_DELAY = 1000;
const colorsLength = colors.length;

startBtn.addEventListener("click", onStartBtnClick);
stoptBtn.addEventListener("click", onStoptBtnClick);

function onStartBtnClick() {
  startBtn.disabled = true;
  stoptBtn.disabled = false;
  intervalId = setInterval(() => {
    const colorID = randomIntegerFromInterval(0, colorsLength);
    body.style.backgroundColor = colors[colorID];
  }, COLOR_DELAY);
};

function onStoptBtnClick() {
  stoptBtn.disabled = true;
  startBtn.disabled = false;
  clearInterval(intervalId);
};

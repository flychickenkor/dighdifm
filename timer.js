let time = 30;
const timeEl = document.getElementById("time");

const interval = setInterval(() => {
  time--;
  timeEl.textContent = time;

  if (time <= 0) {
    clearInterval(interval);
    timeEl.textContent = 0;
  }
}, 1000);


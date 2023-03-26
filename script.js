function debounce(func, delay) {
  let timer;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(context, args), delay);
  };
}

function clock() {
  const hours = document.querySelector(".hour");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");
  const text = document.querySelector(".text");
  const item = document.getElementById("item");

  const h = new Date().getHours();
  const m = new Date().getMinutes();
  const s = new Date().getSeconds();

  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;

  const nama = item.value ? item.value : "Kamu";

  if (h < 10) {
    const ucap = `Selamat Pagi <span>${nama}</span>, Semoga harimu menyenangkan!`;
    text.innerHTML = ucap;
  } else if (h >= 10 && h < 12) {
    const ucap = `Udah mau siang nih, <span>${nama}</span> udah sarapan?`;
    text.innerHTML = ucap;
  } else if (h >= 12 && h < 15) {
    const ucap = `Siang, Cieee <span>${nama}</span> lagi istirahat ya?`;
    text.innerHTML = ucap;
  } else if (h >= 15 && h < 18) {
    const ucap = `Sore sayangku jangan lupa mandi ya 🥰, <span>${nama}</span>`;
    text.innerHTML = ucap;
  } else {
    const ucap = `Malam, <span>${nama}</span> <br/> Jangan lupa istirahat ya :)`;
    text.innerHTML = ucap;
  }
}

const item = document.getElementById("item");
const delayedClock = debounce(clock, 1000);
item.addEventListener("input", delayedClock);

const interval = setInterval(clock, 1000);

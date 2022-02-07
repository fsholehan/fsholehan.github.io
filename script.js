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

  const nama = item.value ? item.value : "Bestie";

  if (h < 10) {
    const ucap = `Pagi, <span>${nama}</span>`;
    text.innerHTML = ucap;
  }
  if (h > 12 && h < 12) {
    const ucap = `Udah mau siang lo, <span>${nama}</span>`;
    text.innerHTML = ucap;
  }
  if (h >= 12 && h < 15) {
    const ucap = `Siang, <span>${nama}</span>`;
    text.innerHTML = ucap;
  }
  if (h >= 15 && h < 18) {
    const ucap = `Sore, <span>${nama}</span>`;
    text.innerHTML = ucap;
  }
  if (h >= 18 && h <= 24) {
    const ucap = `Malam, <span>${nama}</span> <br/> Jangan lupa istirahat ya :)`;
    text.innerHTML = ucap;
  }
}

const interval = setInterval(clock, 1000);

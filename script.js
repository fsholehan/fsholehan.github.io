function clock() {
  const hours = document.querySelector('.hour');
  const minutes = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds');
  const text = document.querySelector('.text');
  const item = document.getElementById('item');

  const h = new Date().getHours();
  const m = new Date().getMinutes();
  const s = new Date().getSeconds();



  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;

  const nama = item.value;

  if (h < 12) {
    const ucap = `Selamat Pagi, <span>${nama}</span>`;
    text.innerHTML = ucap;
  }
  if (h >= 12 && h < 15) {
    const ucap = `Selamat Siang, <span>${nama}</span>`;
    text.innerHTML = ucap;
  }
  if (h >= 15 && h < 18) {
    const ucap = `Selamat Sore, <span>${nama}</span>`;
    text.innerHTML = ucap;
  }
  if (h >= 18 && h <= 24) {
    const ucap = `Selamat Malam, <span>${nama}</span> <br/> Jangan lupa istirahat ya :)`;
    text.innerHTML = ucap;
  }

}

const interval = setInterval(clock, 1000);
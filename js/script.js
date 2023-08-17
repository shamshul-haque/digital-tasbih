const subhanAllahDisplay = document.getElementById("subhanAllahDisplay");
const subhanAllahIncrementBtn = document.getElementById(
  "subhanAllahIncrementBtn"
);
const subhanAllahDecrementBtn = document.getElementById(
  "subhanAllahDecrementBtn"
);

const alhamdulillahDisplay = document.getElementById("alhamdulillahDisplay");
const alhamdulillahIncrementBtn = document.getElementById(
  "alhamdulillahIncrementBtn"
);
const alhamdulillahDecrementBtn = document.getElementById(
  "alhamdulillahDecrementBtn"
);

const allahuakberDisplay = document.getElementById("allahuakberDisplay");
const allahuakberIncrementBtn = document.getElementById(
  "allahuakberIncrementBtn"
);
const allahuakberDecrementBtn = document.getElementById(
  "allahuakberDecrementBtn"
);

const resetBtn = document.getElementById("resetBtn");

let subhanAllah = 0;
let alhamdulillah = 0;
let allahuakber = 0;

subhanAllahIncrementBtn.addEventListener("click", function () {
  if (subhanAllah === 33) {
    return alert("Subhan Allah completed. Start Alhamdulillah.");
  }
  subhanAllah++;
  subhanAllahDisplay.innerText = subhanAllah;
});
alhamdulillahIncrementBtn.addEventListener("click", function () {
  if (alhamdulillah === 33) {
    return alert("Alhamdulillah completed. Start Allahuakber.");
  }
  alhamdulillah++;
  alhamdulillahDisplay.innerText = alhamdulillah;
});
allahuakberIncrementBtn.addEventListener("click", function () {
  if (allahuakber === 34) {
    return alert("Allahuakber completed. Start Subhan Allah.");
  }
  allahuakber++;
  allahuakberDisplay.innerText = allahuakber;
});

subhanAllahDecrementBtn.addEventListener("click", function () {
  if (subhanAllah === 0) {
    return alert("You can't added negative value.");
  }
  subhanAllah--;
  subhanAllahDisplay.innerText = subhanAllah;
});
alhamdulillahDecrementBtn.addEventListener("click", function () {
  if (alhamdulillah === 0) {
    return alert("AYou can't added negative value.");
  }
  alhamdulillah--;
  alhamdulillahDisplay.innerText = alhamdulillah;
});
allahuakberDecrementBtn.addEventListener("click", function () {
  if (allahuakber === 0) {
    return alert("You can't added negative value.");
  }
  allahuakber--;
  allahuakberDisplay.innerText = allahuakber;
});

resetBtn.addEventListener("click", function () {
  subhanAllahDisplay.innerText = 0;
  alhamdulillahDisplay.innerText = 0;
  allahuakberDisplay.innerText = 0;
  subhanAllah = 0;
  alhamdulillah = 0;
  allahuakber = 0;
});

let gameSeq = [];
let userSeq = [];
let buttons = ["yellow", "red", "blue", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game Started!");
    started = true;

    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randomIdx = Math.floor(Math.random() * 3);
  let randomColor = buttons[randomIdx];
  let randomBtn = document.querySelector(`.${randomColor}`);
  console.log(randomIdx);
  console.log(randomColor);
  console.log(randomBtn);
  gameSeq.push(randomColor);
  console.log(gameSeq);
  //random button choose
  btnFlash(randomBtn);
}

function checkAns(idx) {
  console.log("Curr level:", level);
  if (userSeq[idx] === gameSeq[idx]) {
    console.log("Same value");
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start!`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  console.log("button was pressed!");
  console.log(this);
  let btn = this;
  btnFlash(btn);
  userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");

for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}
function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

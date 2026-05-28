const introScreen = document.getElementById("introScreen");

const startBtn = document.getElementById("startBtn");

const screen1 = document.getElementById("screen1");

const screen2 = document.getElementById("screen2");

const noCard = document.getElementById("noCard");

const noBtn = document.getElementById("noBtn");

const yesBtn = document.getElementById("yesBtn");

const btnArea = document.getElementById("btnArea");

/* OPEN INTRO */

startBtn.addEventListener("click",()=>{

  introScreen.style.transition = "0.6s";

  introScreen.style.opacity = "0";

  setTimeout(()=>{

    introScreen.style.display = "none";

    screen1.style.display = "block";

    screen1.animate([
      {
        opacity:0,
        transform:"scale(0.8)"
      },

      {
        opacity:1,
        transform:"scale(1)"
      }

    ],{
      duration:700,
      easing:"ease"
    });

  },600);

});

/* MOVE NO BUTTON */

function moveNoButton(){

  const area = btnArea.getBoundingClientRect();

  const card = noCard.getBoundingClientRect();

  const padding = 10;

  const maxX =
    area.width - card.width - padding;

  const maxY =
    area.height - card.height - padding;

  let randomX =
    Math.random() * maxX;

  let randomY =
    Math.random() * maxY;

  randomX =
    Math.max(padding, randomX);

  randomY =
    Math.max(padding, randomY);

  noCard.style.left = randomX + "px";

  noCard.style.top = randomY + "px";
}

/* DESKTOP */

noBtn.addEventListener(
  "mouseenter",
  moveNoButton
);

/* MOBILE */

noBtn.addEventListener(
  "touchstart",
  (e)=>{
    e.preventDefault();
    moveNoButton();
  }
);

/* CLICK NO */

noBtn.addEventListener(
  "click",
  (e)=>{
    e.preventDefault();
    moveNoButton();
  }
);

/* YES BUTTON */

yesBtn.addEventListener("click",()=>{

  screen1.style.display = "none";

  screen2.style.display = "block";

  screen2.animate([
    {
      opacity:0,
      transform:"scale(0.7)"
    },

    {
      opacity:1,
      transform:"scale(1)"
    }

  ],{
    duration:700,
    easing:"ease"
  });

});
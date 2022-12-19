const feculent = document.querySelector(".feculent");
const feculentBtn = document.querySelector(".feculent-btn");
const legume = document.querySelector(".legume");
const legumeBtn = document.querySelector(".legume-btn");
const rec = document.querySelector("#receipe");
const header = document.querySelector("header");
const ticket = document.querySelector(".ticket");
const ticket2 = document.querySelector(".ticket2");
const ticket3 = document.querySelector(".ticket3");
const ticket4 = document.querySelector(".ticket4");

let pates = document.querySelector("#pates");
let poireau = document.querySelector("#poireau");
let riz = document.querySelector("#riz");
let patates = document.querySelector("#patate");
let polenta = document.querySelector("#polenta");
let carotte = document.querySelector("#carotte");
let fondVeau = document.querySelector("#fondDeVeau");
let oignon = document.querySelector("#oignon");
let beurre = document.querySelector("#beurre");
let lait = document.querySelector("#lait");
let haricotR = document.querySelector("#haricotRouge");
let boeuf = document.querySelector("#boeuf");
let tomate = document.querySelector("#tomate");
let huileOlive = document.querySelector("#huileOlive");
let poivron = document.querySelector("#poivron");
let ail = document.querySelector("#ail");
let asperge = document.querySelector("#asperge");
let parmesan = document.querySelector("#parmesan");
let vinBlanc = document.querySelector("#vinBlanc");
let cumin = document.querySelector("#cumin");
let muscade = document.querySelector("#muscade");
let comté = document.querySelector("#comté");
let persil = document.querySelector("#persil");

rec.addEventListener("click", () => {
  rec.style.bottom = "15%";
  if (
    riz.checked === true &&
    oignon.checked === true &&
    fondVeau.checked === true &&
    beurre.checked === true &&
    asperge.checked === true &&
    parmesan.checked === true &&
    vinBlanc.checked === true
  ) {
    ticket2.style.visibility = "visible";
    ticket2.style.opacity = "1";
  }
  if (
    patates.checked === true &&
    beurre.checked === true &&
    lait.checked === true &&
    muscade.checked === true
  ) {
    ticket.style.visibility = "visible";
    ticket.style.opacity = "1";
  }
  if (
    riz.checked === true &&
    haricotR.checked === true &&
    tomate.checked === true &&
    huileOlive.checked === true &&
    boeuf.checked === true &&
    carotte.checked === true &&
    poivron.checked === true &&
    oignon.checked === true &&
    ail.checked === true &&
    huileOlive.checked === true
  ) {
    ticket3.style.visibility = "visible";
    ticket3.style.opacity = "1";
  }
  if (
    patates.checked === true &&
    beurre.checked === true &&
    comté.checked === true &&
    boeuf.checked === true &&
    oignon.checked === true &&
    ail.checked === true &&
    persil.checked === true
  ) {
    ticket3.style.visibility = "visible";
    ticket3.style.opacity = "1";
  }
});

let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    header.style.top = "0px";
  } else {
    header.style.top = "-150px";
  }

  lastScroll = window.scrollY;
});

feculentBtn.addEventListener("click", () => {
  let left = getComputedStyle(feculent).getPropertyValue("left");
  console.log(left);
  if ((feculent.style.left = "-915px")) {
    feculent.style.left = "-100px";
  } else if ((left = "-100px")) {
    feculent.style.background = "#FEFEFF";
  }
});

legumeBtn.addEventListener("click", () => {
  if ((legume.style.left = "-915px")) {
    legume.style.left = "-100px";
  }
});

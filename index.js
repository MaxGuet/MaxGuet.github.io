const ingBtnLeft = document.querySelectorAll("ing-btn-left");
const ingBtnRight = document.getElementsByClassName("ing-btn-right");
const ingContainerLeft = document.getElementsByClassName("ing-container-left");
const ingContainerRight = document.getElementsByClassName(
  "ing-container-right"
);
const feculentBtn = document.querySelector(".feculent-btn");
const feculent = document.querySelector(".feculent");
const legume = document.querySelector(".legume");
const legumeBtn = document.querySelector(".legume-btn");
const onion = document.querySelector(".oignon");
const onionBtn = document.querySelector(".oignon-btn");
const aromate = document.querySelector(".aromate");
const aromateBtn = document.querySelector(".aromate-btn");
const epice = document.querySelector(".epice");
const epiceBtn = document.querySelector(".epice-btn");
const liquide = document.querySelector(".liquide");
const liquideBtn = document.querySelector(".liquide-btn");
const gras = document.querySelector(".gras");
const grasBtn = document.querySelector(".gras-btn");
const viande = document.querySelector(".viande");
const viandeBtn = document.querySelector(".viande-btn");
const fromage = document.querySelector(".fromage");
const fromageBtn = document.querySelector(".fromage-btn");

const rec = document.querySelector("#receipe");
const header = document.querySelector("header");
const ticket = document.querySelector(".ticket");
const ticket2 = document.querySelector(".ticket2");
const ticket3 = document.querySelector(".ticket3");
const ticket4 = document.querySelector(".ticket4");

const pates = document.querySelector("#pates");
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
  if (rec.style.top == "50%") {
    rec.style.top == "20%";
  }
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
    ticket2.style.opacgooity = "1";
    ticket2.style.top = "-950px";
  }
  if (
    patates.checked === true &&
    beurre.checked === true &&
    lait.checked === true &&
    muscade.checked === true
  ) {
    console.log("okay");
    ticket.style.visibility = "visible";
    ticket.style.opacity = "1";
    ticket.style.top = "150px";
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
  if (feculent.style.left <= "-60%") {
    feculent.style.left = "30%";
  } else if (feculent.style.left <= "30%") {
    feculent.style.left = "-60%";
  }
});

legumeBtn.addEventListener("click", () => {
  if (legume.style.left <= "-60%") {
    legume.style.left = "30%";
  } else if (legume.style.left <= "30%") {
    legume.style.left = "-60%";
  }
});

onionBtn.addEventListener("click", () => {
  if (onion.style.left <= "-60%") {
    onion.style.left = "30%";
  } else if (onion.style.left <= "30%") {
    onion.style.left = "-60%";
  }
});

aromateBtn.addEventListener("click", () => {
  if (aromate.style.left <= "-60%") {
    aromate.style.left = "30%";
  } else if (aromate.style.left == "30%") {
    aromate.style.left = "-60%";
  }
});

epiceBtn.addEventListener("click", () => {
  if (epice.style.left <= "-60%") {
    epice.style.left = "30%";
  } else if (epice.style.left == "30%") {
    epice.style.left = "-60%";
  }
});

liquideBtn.addEventListener("click", () => {
  if (liquide.style.left <= "100%") {
    liquide.style.left = "9%";
  } else if (liquide.style.left == "9%") {
    liquide.style.left = "100%";
  }
});

grasBtn.addEventListener("click", () => {
  if (gras.style.left <= "100%") {
    gras.style.left = "9%";
  } else if (gras.style.left == "9%") {
    gras.style.left = "100%";
  }
});

viandeBtn.addEventListener("click", () => {
  if (viande.style.left <= "100%") {
    viande.style.left = "9%";
  } else if (viande.style.left == "9%") {
    viande.style.left = "100%";
  }
});

fromageBtn.addEventListener("click", () => {
  if (fromage.style.left <= "100%") {
    fromage.style.left = "9%";
  } else if (fromage.style.left == "9%") {
    fromage.style.left = "100%";
  }
});

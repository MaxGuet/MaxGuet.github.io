const rec = document.querySelector("#receipe");
const header = document.querySelector("header");

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
let conté = document.querySelector("#conté");
let persil = document.querySelector("#persil");

const cook = () => {
  if (
    riz.checked === true &&
    oignon.checked === true &&
    fondVeau.checked === true &&
    beurre.checked === true &&
    asperge.checked === true &&
    parmesan.checked === true &&
    vinBlanc.checked === true
  ) {
    console.log("Risotto aux asperges!");
  }
  if (
    patates.checked === true &&
    beurre.checked === true &&
    lait.checked === true &&
    muscade.checked === true
  ) {
    console.log("Purée!");
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
    console.log("Chili Con Carne!");
  }
  if (
    patates.checked === true &&
    beurre.checked === true &&
    conté.checked === true &&
    boeuf.checked === true &&
    oignon.checked === true &&
    ail.checked === true &&
    persil.checked === true
  ) {
    console.log("Hachis Parmentier!");
  }
};

cook();

let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    header.style.top = "0px";
  } else {
    header.style.top = "-150px";
  }

  lastScroll = window.scrollY;
});

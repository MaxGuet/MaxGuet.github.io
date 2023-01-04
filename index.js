const ingBtnLeft = document.querySelectorAll("ing-btn-left");
const ingBtnRight = document.querySelectorAll("ing-btn-right");
const ingContainerLeft = document.querySelectorAll("ing-container-left");
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
const pates = document.querySelector("#pates");
const poireau = document.querySelector("#poireau");
const riz = document.querySelector("#riz");
const patates = document.querySelector("#patate");
const polenta = document.querySelector("#polenta");
const carotte = document.querySelector("#carotte");
const fondVeau = document.querySelector("#fondDeVeau");
const oignon = document.querySelector("#oignon");
const beurre = document.querySelector("#beurre");
const lait = document.querySelector("#lait");
const haricotR = document.querySelector("#haricotRouge");
const boeuf = document.querySelector("#boeuf");
const tomate = document.querySelector("#tomate");
const huileOlive = document.querySelector("#huileOlive");
const poivron = document.querySelector("#poivron");
const ail = document.querySelector("#ail");
const asperge = document.querySelector("#asperge");
const parmesan = document.querySelector("#parmesan");
const vinBlanc = document.querySelector("#vinBlanc");
const cumin = document.querySelector("#cumin");
const muscade = document.querySelector("#muscade");
const comté = document.querySelector("#comté");
const persil = document.querySelector("#persil");

feculentBtn.addEventListener("click", () => {
  feculent.classList.toggle("ing-container-left-open");
});

legumeBtn.addEventListener("click", () => {
  legume.classList.toggle("ing-container-left-open");
});

onionBtn.addEventListener("click", () => {
  onion.classList.toggle("ing-container-left-open");
});

aromateBtn.addEventListener("click", () => {
  aromate.classList.toggle("ing-container-left-open");
});

epiceBtn.addEventListener("click", () => {
  epice.classList.toggle("ing-container-left-open");
});

liquideBtn.addEventListener("click", () => {
  liquide.classList.toggle("ing-container-right-open");
});

fromageBtn.addEventListener("click", () => {
  fromage.classList.toggle("ing-container-right-open");
});

viandeBtn.addEventListener("click", () => {
  viande.classList.toggle("ing-container-right-open");
});

grasBtn.addEventListener("click", () => {
  gras.classList.toggle("ing-container-right-open");
});

fromageBtn.addEventListener("click", () => {
  fromage.classList.toggle("ing-container-right");
});

const createDiv = (parent, title, image) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("receipe-suggestion");
  parent.appendChild(newDiv);
  newDiv.style.background = `url(${image}) center/cover`;

  const newDivTitle = document.createElement("h1");
  newDivTitle.classList.add("receipe-suggestion-title");
  newDiv.appendChild(newDivTitle);
  newDivTitle.innerHTML = title;
};

const receipeBtn = document.getElementById("receipe");
const receipeContainer = document.querySelector(".receipe-container");

receipeBtn.addEventListener("click", () => {
  receipeBtn.style.top = "80%";
  if (
    patates.checked === true &&
    lait.checked === true &&
    muscade.checked === true &&
    beurre.checked === true
  ) {
    createDiv(receipeContainer, "purée", "./purée.jpg");
  }
  if (
    riz.checked === true &&
    oignon.checked === true &&
    fondVeau.checked === true &&
    beurre.checked === true &&
    asperge.checked === true &&
    parmesan.checked === true &&
    vinBlanc.checked === true
  )
    createDiv(receipeContainer, "Risotto", "./risotto.jpg");
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
  )
    createDiv(receipeContainer, "Chili", "./chili.jpg");
  if (
    patates.checked === true &&
    beurre.checked === true &&
    comté.checked === true &&
    boeuf.checked === true &&
    oignon.checked === true &&
    ail.checked === true &&
    persil.checked === true
  ) {
    createDiv(receipeContainer, "Hachis Parmentier", "./hachis.jpg");
  }
});

const receipeBtn = document.getElementById("receipe");
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
const receipeContainer = document.querySelector(".receipe-container");
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
const semoule = document.querySelector("#semoule");
const carotte = document.querySelector("#carotte");
const fondVeau = document.querySelector("#fondDeVeau");
const oignon = document.querySelector("#oignon");
const beurre = document.querySelector("#beurre");
const lait = document.querySelector("#lait");
const haricotR = document.querySelector("#haricotRouge");
const boeuf = document.querySelector("#boeuf");
const cochon = document.querySelector("#cochon");
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
const menthe = document.querySelector("#menthe");
const vinaigre = document.querySelector("#vinaigre");
const mozzarella = document.querySelector("#mozzarella");
const basilic = document.querySelector("#basilic");
const mais = document.querySelector("#mais");
const thon = document.querySelector("#thon");
const receipeSuggestion = document.querySelector(".receipeSuggestion");
const main = document.querySelector(".pres");
const vanille = document.getElementById("vanille");
const checkboxes = document.querySelectorAll("input[type=checkbox]");

feculentBtn.addEventListener("click", () => {
  feculent.classList.toggle("ing-container-left-open");
  legume.classList.remove("ing-container-left-open");
  onion.classList.remove("ing-container-left-open");
  aromate.classList.remove("ing-container-left-open");
  epice.classList.remove("ing-container-left-open");
});

legumeBtn.addEventListener("click", () => {
  legume.classList.toggle("ing-container-left-open");
  feculent.classList.remove("ing-container-left-open");
  onion.classList.remove("ing-container-left-open");
  aromate.classList.remove("ing-container-left-open");
  epice.classList.remove("ing-container-left-open");
});

onionBtn.addEventListener("click", () => {
  onion.classList.toggle("ing-container-left-open");
  feculent.classList.remove("ing-container-left-open");
  legume.classList.remove("ing-container-left-open");
  aromate.classList.remove("ing-container-left-open");
  epice.classList.remove("ing-container-left-open");
});

aromateBtn.addEventListener("click", () => {
  aromate.classList.toggle("ing-container-left-open");
  feculent.classList.remove("ing-container-left-open");
  legume.classList.remove("ing-container-left-open");
  onion.classList.remove("ing-container-left-open");
  epice.classList.remove("ing-container-left-open");
});

epiceBtn.addEventListener("click", () => {
  epice.classList.toggle("ing-container-left-open");
  feculent.classList.remove("ing-container-left-open");
  legume.classList.remove("ing-container-left-open");
  onion.classList.remove("ing-container-left-open");
  aromate.classList.remove("ing-container-left-open");
});

liquideBtn.addEventListener("click", () => {
  liquide.classList.toggle("ing-container-right-open");
  fromage.classList.remove("ing-container-right-open");
  viande.classList.remove("ing-container-right-open");
  gras.classList.remove("ing-container-right-open");
});

fromageBtn.addEventListener("click", () => {
  fromage.classList.toggle("ing-container-right-open");
  liquide.classList.remove("ing-container-right-open");
  viande.classList.remove("ing-container-right-open");
  gras.classList.remove("ing-container-right-open");
});

viandeBtn.addEventListener("click", () => {
  viande.classList.toggle("ing-container-right-open");
  fromage.classList.remove("ing-container-right-open");
  liquide.classList.remove("ing-container-right-open");
  gras.classList.remove("ing-container-right-open");
});

grasBtn.addEventListener("click", () => {
  fromage.classList.remove("ing-container-right-open");
  liquide.classList.remove("ing-container-right-open");
  viande.classList.remove("ing-container-right-open");
  gras.classList.toggle("ing-container-right-open");
});

//******FONCTION RECEIPE SUGGESTION CREATION */

const createDiv = (title) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("receipe-suggestion");
  newDiv.id = title;
  receipeContainer.appendChild(newDiv);
  newDiv.style.background = `#2F4858`;

  const newDivTitle = document.createElement("a");
  newDivTitle.setAttribute("href", "./recette.html");
  newDivTitle.classList.add("receipe-suggestion-title");
  newDiv.appendChild(newDivTitle);
  newDivTitle.innerHTML = title;

  receipeContainer.insertBefore(newDiv, receipeContainer.firstChild);
};

// ******FONCTION SELECT ALL*********//

// // function toggle(source) {
// //   checkboxes = document.getElementsByName("foo");
// //   for (let i = 0, n = checkboxes.length; i < n; i++) {
// //     checkboxes[i].checked = source.checked;
// //   }
// }

//******FONCTION REMOVE CREATION OF THE SAME RECEIPE */
function removeChild(parent) {
  while (parent.firstChild) parent.removeChild(parent.firstChild);
}

receipeBtn.addEventListener("click", () => {
  removeChild(receipeContainer);
  receipeBtn.style.top = "80%";
  if (window.screen.width < 800) {
    receipeBtn.style.display = "none";
  }
  feculent.classList.remove("ing-container-left-open");
  legume.classList.remove("ing-container-left-open");
  onion.classList.remove("ing-container-left-open");
  aromate.classList.remove("ing-container-left-open");
  epice.classList.remove("ing-container-left-open");
  viande.classList.remove("ing-container-right-open");
  liquide.classList.remove("ing-container-right-open");
  gras.classList.remove("ing-container-right-open");
  fromage.classList.replace("ing-container-right-open", "ing-container-right");

  if (
    patates.checked === true &&
    lait.checked === true &&
    muscade.checked === true &&
    beurre.checked === true &&
    ail.checked === true
  ) {
    createDiv("purée");
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
    createDiv("Risotto");
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
    huileOlive.checked === true &&
    cumin.checked === true
  )
    createDiv("Chili");
  if (
    patates.checked === true &&
    beurre.checked === true &&
    comté.checked === true &&
    boeuf.checked === true &&
    oignon.checked === true &&
    ail.checked === true &&
    persil.checked === true &&
    carotte.checked === true
  ) {
    createDiv("Hachis Parmentier");
  }
  if (
    pates.checked === true &&
    cochon.checked === true &&
    parmesan.checked === true &&
    beurre.checked === true &&
    oignon.checked === true
  )
    createDiv("Pates à la carbonara");
  if (
    semoule.checked === true &&
    persil.checked === true &&
    tomate.checked === true &&
    huileOlive.checked === true &&
    poivron.checked === true &&
    oignon.checked === true &&
    menthe.checked === true
  )
    createDiv("Taboulé");

  if (
    patates.checked === true &&
    oignon.checked === true &&
    huileOlive.checked === true &&
    vinaigre.checked === true
  )
    createDiv("Salade de patates");

  if (
    tomate.checked === true &&
    mozzarella.checked === true &&
    huileOlive.checked === true &&
    basilic.checked === true
  )
    createDiv("Tomates / Mozzarella");
  if (
    riz.checked === true &&
    huileOlive.checked === true &&
    mais.checked === true &&
    thon.checked === true &&
    tomate.checked === true
  )
    createDiv("Salade de riz");
  if (riz.checked === true && lait.checked === true && vanille.checked === true)
    createDiv("Riz au Lait");
  // else {
  //   createDiv("C'est l'heure de faire les courses!");
  // }
});

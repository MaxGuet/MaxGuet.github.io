const plat = document.querySelector(".plat");
const dessert = document.querySelector(".dessert");
const entree = document.querySelector(".entree");
const tomateMozza = document.querySelector(".tomateMozza");
const taboulet = document.querySelector(".taboulet");
const saladePatate = document.querySelector(".saladePatate");
const saladeRiz = document.querySelector(".saladeRiz");
const poireauVinaigrette = document.querySelector(".poireauVinaigrette");
const puree = document.querySelector(".puree");
const risotto = document.querySelector(".risotto");
const sdpR = document.querySelector(".sdpR");
const tabouletR = document.querySelector(".tabouletR");
const tomMozza = document.querySelector(".tomMozza");
const sdr = document.querySelector(".sdr");
const poireauVi = document.querySelector(".poireauVi");
const pureeR = document.querySelector(".pureeR");
const risottoAs = document.querySelector(".risottoAs");

taboulet.addEventListener("click", () => {
  console.log("coucou!");
  plat.style.display = "none";
  dessert.style.display = "none";
  tomMozza.style.display = "none";
  poireauVi.style.display = "none";
  sdr.style.display = "none";
  tabouletR.style.display = "initial";
  sdpR.style.display = "none";
});

saladePatate.addEventListener("click", () => {
  console.log("okay");
  plat.style.display = "none";
  dessert.style.display = "none";
  tabouletR.style.display = "none";
  tomMozza.style.display = "none";
  poireauVi.style.display = "none";
  sdr.style.display = "none";
  sdpR.style.display = "initial";
});

tomateMozza.addEventListener("click", () => {
  plat.style.display = "none";
  dessert.style.display = "none";
  sdpR.style.display = "none";
  poireauVi.style.display = "none";
  tabouletR.style.display = "none";
  sdr.style.display = "none";
  tomMozza.style.display = "initial";
});

saladeRiz.addEventListener("click", () => {
  plat.style.display = "none";
  dessert.style.display = "none";
  sdpR.style.display = "none";
  tabouletR.style.display = "none";
  tomMozza.style.display = "none";
  poireauVi.style.display = "none";
  sdr.style.display = "initial";
});

poireauVinaigrette.addEventListener("click", () => {
  plat.style.display = "none";
  dessert.style.display = "none";
  sdpR.style.display = "none";
  tabouletR.style.display = "none";
  tomMozza.style.display = "none";
  sdr.style.display = "none";
  poireauVi.style.display = "initial";
});

puree.addEventListener("click", () => {
  entree.style.display = "none";
  dessert.style.display = "none";
  sdpR.style.display = "none";
  tabouletR.style.display = "none";
  tomMozza.style.display = "none";
  sdr.style.display = "none";
  poireauVi.style.display = "none";
  risottoAs.style.display = "none";
  pureeR.style.display = "initial";
});

risotto.addEventListener("click", () => {
  entree.style.display = "none";
  dessert.style.display = "none";
  sdpR.style.display = "none";
  tabouletR.style.display = "none";
  tomMozza.style.display = "none";
  sdr.style.display = "none";
  poireauVi.style.display = "none";
  pureeR.style.display = "none";
  risottoAs.style.display = "initial";
});

import { stock } from "./data/stockExport.js";
console.log(stock);

alert(
  "Su stock actual \n TELEKINOS: " +
    stock[0] +
    "\n RASPADITAS de $15: " +
    stock[1] +
    "\n RASPADITAS de $100: " +
    stock[2]
);

function restock() {
  let telekinoN = document.getElementById("telekinoN").value;
  stock[0] = telekinoN;
  let raspadita15 = document.getElementById("raspadita15").value;
  stock[1] = raspadita15;
  let raspadita100 = document.getElementById("raspadita100").value;
  stock[2] = raspadita100;
}
function mostrarStock() {
  document.getElementById("initial").innerHTML = ` <br>
  TELEKINO: ${stock[0]} <br>
  RASPADITA x 15: ${stock[1]} <br>
  RASPADITA x 100: ${stock[2]}`;
}
let botonStock = document.getElementById("stockFinal");
botonStock.addEventListener("click", restock);
botonStock.addEventListener("click", mostrarStock);

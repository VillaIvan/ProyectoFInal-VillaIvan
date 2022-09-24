import { stock } from "./data/stockExport.js";

let check = JSON.parse(localStorage.getItem("stockDB"));
if (check == null || check == undefined) {
  check = localStorage.setItem("stockDB", JSON.stringify(stock));
}
console.log(check);

Swal.fire(
  "STOCK",
  "TELEKINOS:" +
    check[0].cantidad +
    " \n " +
    "Raspaditas de $15:" +
    check[1].cantidad +
    "\n" +
    "Raspaditas de $100:" +
    check[2].cantidad,
  "info"
);
mostrarStock();

function restock() {
  let telekinoN = document.getElementById("telekinoN").value;
  telekinoN == "" ? telekinoN == "0" : telekinoN;
  check[0].cantidad = telekinoN;
  let raspadita15 = document.getElementById("raspadita15").value;
  check[1].cantidad = raspadita15;
  let raspadita100 = document.getElementById("raspadita100").value;
  check[2].cantidad = raspadita100;
  console.log(telekinoN);
  localStorage.setItem("stockDB", JSON.stringify(check));
}
function mostrarStock() {
  document.getElementById("initial").innerHTML = ` <br>
  TELEKINO: ${check[0].cantidad} <br>
  RASPADITA x 15: ${check[1].cantidad} <br>
  RASPADITA x 100: ${check[2].cantidad}`;
}
let botonStock = document.getElementById("stockFinal");
botonStock.addEventListener("click", restock);
botonStock.addEventListener("click", mostrarStock);

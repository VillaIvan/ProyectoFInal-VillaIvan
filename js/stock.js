const stock = [20, 20, 20];

alert(
  "Su stock actual \n TELEKINOS: " +
    stock[0] +
    "\n RASPADITAS de $15: " +
    stock[1] +
    "\n RASPADITAS de $100: " +
    stock[2]
);
let check = prompt("Desea actualizar el stock?").toLowerCase();
if (check == "si") {
  function restock() {
    let telekinoN = prompt("cuantos telekinos tiene actualmente?");
    stock[0] = telekinoN;
    let raspadita15 = prompt("cuantos raspaditas de $15 tiene actualmente?");
    stock[1] = raspadita15;
    let raspadita100 = prompt("cuantos raspaditas de $100 tiene actualmente?");
    stock[2] = raspadita100;
  }
  function mostrarStock() {
    document.write("<h2>STOCK ACTUALIZADO DE PRODUCTOS</h2>");
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
           <h2>TELEKINO: ${stock[0]}</h2>
           <h2>RASPADITA x 15: ${stock[1]}</h2>
           <h2>RASPADITA x 100: ${stock[2]}</h2>`;
    document.body.appendChild(contenedor);
  }
  restock();
  mostrarStock();
  menu();
} else {
  menu();
}

import { stock } from "./data/stockExport.js";

let totalCajaInicio = 0;
let cantTele, cantRasp15, cantRasp100;
const tkV = 0;

Swal.fire("INICIO DE CAJA", "La caja inicia con $" + totalCajaInicio, "info");
function cajaDiaria() {
  function difVentas(ventaIni, ventaFin) {
    let v1 = document.getElementById("ventasI").value;
    let v2 = document.getElementById("ventasO").value;
    let resuVentas = v2 - v1;
    return resuVentas;
  }

  function difPagos(pagosIni, pagosFin) {
    let p1 = document.getElementById("pagosI").value;
    let p2 = document.getElementById("pagosO").value;
    let resuPagos = p2 - p1;
    return resuPagos;
  }

  function calcTk(cantTk) {
    cantTele = document.getElementById("tkO").value;
    stock[0] = stock[0] - cantTele;
    let valorTk = 150;
    let total = 0;
    for (let i = 0; i <= cantTele; i++) {
      total = i * valorTk;
    }
    return total;
  }

  function calcRasp15(cantR15) {
    cantRasp15 = document.getElementById("raspa15").value;
    stock[1] = stock[1] - cantRasp15;
    let valorR15 = 15;
    let total = 0;
    for (let i = 0; i <= cantRasp15; i++) {
      total = i * valorR15;
    }
    return total;
  }
  function calcRasp100(cantR100) {
    cantRasp100 = document.getElementById("raspa100").value;
    stock[2] = stock[2] - cantRasp100;
    let valorR100 = 100;
    let total = 0;
    for (let i = 0; i <= cantRasp100; i++) {
      total = i * valorR100;
    }
    return total;
  }
  var difVentasD = difVentas().toFixed(2);
  const difPagosD = difPagos().toFixed(2);
  const telekinos = calcTk();
  const rasp15 = calcRasp15();
  const rasp100 = calcRasp100();
  const resultadoVP = difVentasD - difPagosD + telekinos + rasp15 + rasp100;
  console.log(resultadoVP);
  Swal.fire({
    title: "Estas seguro?",
    text: "La suma de la caja no se puede revertir!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#000096",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirmar",
  }).then((result) => {
    if (result.isConfirmed) {
      if (resultadoVP < 0) {
        Swal.fire(
          "CAJA EN NEGATIVO",
          "Revise los parametros. Usted adeuda " + resultadoVP,
          "error"
        );
      } else {
        Swal.fire(
          "CAJA CORRECTAMENTE INGRESADA",
          "Su caja contiene $" + resultadoVP,
          "success"
        );
      }
    }
  });
  totalCajaInicio = totalCajaInicio + resultadoVP;
  let contenedor = document.getElementById("initial");
  contenedor.className = "titulo2";
  contenedor.innerHTML = `
    Caja Actual:$${totalCajaInicio}`;
}
let botonTotal = document.getElementById("totalFinal");
botonTotal.addEventListener("click", cajaDiaria);

let totalCajaInicio = 0;
let cantTele, cantRasp15, cantRasp100;
const tkV = 0;

function cajaDiaria() {
  alert("La caja inicia con $" + totalCajaInicio);
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
    for (i = 0; i <= cantTele; i++) {
      total = i * valorTk;
    }
    return total;
  }

  function calcRasp15(cantR15) {
    cantRasp15 = document.getElementById("raspa15").value;
    stock[1] = stock[1] - cantRasp15;
    let valorR15 = 15;
    let total = 0;
    for (i = 0; i <= cantRasp15; i++) {
      total = i * valorR15;
    }
    return total;
  }
  function calcRasp100(cantR100) {
    cantRasp100 = document.getElementById("raspa100").value;
    stock[2] = stock[2] - cantRasp100;
    let valorR100 = 100;
    let total = 0;
    for (i = 0; i <= cantRasp100; i++) {
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
  if (resultadoVP < 0) {
    alert("Usted tiene la caja en negativo, revise los parametros");
    alert("Usted adeuda " + resultadoVP);
  } else {
    alert("el resultado de la caja es " + resultadoVP);
  }
  totalCajaInicio = totalCajaInicio + resultadoVP;
}
let botonTotal = document.getElementById("totalFinal");
botonTotal.addEventListener("click", cajaDiaria);

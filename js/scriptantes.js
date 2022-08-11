function login(usuario, password) {
  let booleano = false;
  while (!booleano) {
    const usuario = prompt("Ingrese usuario a loguear: ");
    const password = prompt("Ingrese la password: ");

    if (usuario == "admin") {
      booleano = true;
    }
    if (booleano && password == "1234") {
      booleano = true;
      alert("Bienvenido Ivan!");
    } else {
      booleano = false;
      alert("Identificacion incorrecta");
    }
  }
  return booleano;
}

login();

function difVentas(ventaIni, ventaFin) {
  let v1 = parseFloat(prompt("indique con cuanta venta arranco su turno"));
  let v2 = parseFloat(prompt("indique con cuanta venta finalizo su turno"));
  let resuVentas = v2 - v1;
  if (!isNaN(resuVentas)) {
    return resuVentas;
  } else {
    alert("utilice numeros");
  }
}

var difVentasD = difVentas().toFixed(2);

function difPagos(pagosIni, pagosFin) {
  let p1 = parseFloat(prompt("indique con cuantos pagos inicio su turno"));
  let p2 = parseFloat(prompt("indique con cuantos pagos finalizo su turno"));
  let resuPagos = p2 - p1;
  if (!isNaN(resuPagos)) {
    return resuPagos;
  } else {
    alert("utilice numeros");
  }
}

function calcTk(cantTk) {
  let cant = parseFloat(prompt("ingrese cantidad de telekinos vendidos"));
  let valorTk = 150;
  let total = 0;
  for (i = 0; i <= cant; i++) {
    total = i * valorTk;
  }
  return total;
  console.log(total);
}

const difPagosD = difPagos().toFixed(2);
const telekinos = calcTk();
const resultadoVP = difVentasD - difPagosD + telekinos;
if (resultadoVP < 0) {
  alert("Usted tiene la caja en negativo, revise los parametros");
  alert("Usted adeuda " + resultadoVP);
} else {
  alert("el resultado de la caja es " + resultadoVP);
}

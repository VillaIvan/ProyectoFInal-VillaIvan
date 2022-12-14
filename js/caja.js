import { stock } from "./data/stockExport.js";

let check = JSON.parse(localStorage.getItem("stockDB"));
console.log(check);
let totalCajaInicio = 0;
localStorage.setItem("totalCajaInicio", totalCajaInicio);
let cantTele, cantRasp15, cantRasp100;
const tkV = 0;

let initialBox = localStorage.getItem("totalCajaInicio");

Swal.fire("INICIO DE CAJA", "La caja inicia con $" + initialBox, "info");
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
    check[0].cantidad = check[0].cantidad - cantTele;
    let valorTk = 150;
    let total = 0;
    for (let i = 0; i <= cantTele; i++) {
      total = i * valorTk;
    }
    return total;
  }

  function calcRasp15(cantR15) {
    cantRasp15 = document.getElementById("raspa15").value;
    check[1].cantidad = check[1].cantidad - cantRasp15;
    let valorR15 = 15;
    let total = 0;
    for (let i = 0; i <= cantRasp15; i++) {
      total = i * valorR15;
    }
    return total;
  }
  function calcRasp100(cantR100) {
    cantRasp100 = document.getElementById("raspa100").value;
    check[2].cantidad = check[2].cantidad - cantRasp100;
    let valorR100 = 100;
    let total = 0;
    for (let i = 0; i <= cantRasp100; i++) {
      total = i * valorR100;
    }
    return total;
  }

  let stockUpdate = () => {
    for (let elemento of check) {
      elemento.cantidad == 0
        ? console.log("no tenes mas " + elemento.producto + "actualiza stock")
        : console.log("tenes stock aun de " + elemento.producto);
    }
    localStorage.setItem("stockDB", JSON.stringify(check));
  };

  const difVentasD = difVentas().toFixed(2);
  const difPagosD = difPagos().toFixed(2);
  const telekinos = calcTk();
  const rasp15 = calcRasp15();
  const rasp100 = calcRasp100();
  stockUpdate();
  const resultadoVP = difVentasD - difPagosD + telekinos + rasp15 + rasp100;
  console.log(resultadoVP);
  console.log(check);
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
  localStorage.setItem("totalCajaInicio", totalCajaInicio);
  let contenedor = document.getElementById("initial");
  contenedor.className = "titulo2";
  contenedor.innerHTML = `
    Caja Actual:$${totalCajaInicio}`;
}
let botonTotal = document.getElementById("totalFinal");
botonTotal.addEventListener("click", cajaDiaria);

///////////////// EMAILJS ////////////////////

const btn = document.getElementById("send");

document.getElementById("formBox").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_gqg9g8a";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      Swal.fire("CAJA CORRECTAMENTE ENVIADA", "", "success");
    },
    (err) => {
      btn.value = "Send Email";
      Swal.fire("FALLO ENVIO DE CAJA", "", "error");
      alert(JSON.stringify(err));
    }
  );
});

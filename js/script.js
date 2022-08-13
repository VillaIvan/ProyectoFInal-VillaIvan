let totalCajaInicio = 0;
let cantTele, cantRasp15, cantRasp100;

const userDB = [
  { user: "admin", pass: "1234" },
  { user: "ivan", pass: "villa" },
  { user: "coder", pass: "house" },
];

const stock = [20, 20, 20];
const tkV = 0;

function login(usuario, password) {
  let booleano = false;
  while (!booleano) {
    const usuario = prompt("Ingrese usuario a loguear: ");
    const password = prompt("Ingrese la password: ");

    const validUser = userDB.findIndex((elemento) => {
      return elemento.user === usuario;
    });
    const validPass = userDB.findIndex((elemento) => {
      return elemento.pass === password;
    });

    if (validUser === validPass && validUser != -1 && validPass != -1) {
      booleano = true;
      alert("Bienvenido Usuario!");
    } else {
      booleano = false;
      alert("Identificacion incorrecta");
    }
  }
  return booleano;
}

login();

function menu() {
  let opcionMenu = prompt(
    "Ingrese la accion:\n\t 'CAJA' \n\t 'STOCK' \n\t 'PERMISOS' "
  );

  let optMenu = opcionMenu.toLowerCase();

  switch (optMenu) {
    case "caja":
      function cajaDiaria() {
        alert("La caja inicia con $" + totalCajaInicio);
        function difVentas(ventaIni, ventaFin) {
          let v1 = parseFloat(
            prompt("indique con cuanta venta arranco su turno")
          );
          let v2 = parseFloat(
            prompt("indique con cuanta venta finalizo su turno")
          );
          let resuVentas = v2 - v1;
          if (!isNaN(resuVentas)) {
            return resuVentas;
          } else {
            alert("utilice numeros");
          }
        }

        function difPagos(pagosIni, pagosFin) {
          let p1 = parseFloat(
            prompt("indique con cuantos pagos inicio su turno")
          );
          let p2 = parseFloat(
            prompt("indique con cuantos pagos finalizo su turno")
          );
          let resuPagos = p2 - p1;
          if (!isNaN(resuPagos)) {
            return resuPagos;
          } else {
            alert("utilice numeros");
          }
        }

        function calcTk(cantTk) {
          cantTele = parseFloat(
            prompt(
              "ingrese cantidad de telekinos vendidos. Actualmente hay " +
                stock[0] +
                " unidades"
            )
          );
          stock[0] = stock[0] - cantTele;
          let valorTk = 150;
          let total = 0;
          for (i = 0; i <= cantTele; i++) {
            total = i * valorTk;
          }
          return total;
        }

        function calcRasp15(cantR15) {
          cantRasp15 = parseFloat(
            prompt(
              "ingrese cantidad de raspaditas de $15 vendidas. Actualmente hay " +
                stock[1] +
                " unidad/es"
            )
          );
          stock[1] = stock[1] - cantRasp15;
          let valorR15 = 15;
          let total = 0;
          for (i = 0; i <= cantRasp15; i++) {
            total = i * valorR15;
          }
          return total;
        }
        function calcRasp100(cantR100) {
          cantRasp100 = parseFloat(
            prompt(
              "ingrese cantidad de raspaditas de $100 vendidas. Actualmente hay " +
                stock[2] +
                " unidad/es"
            )
          );
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
        const resultadoVP =
          difVentasD - difPagosD + telekinos + rasp15 + rasp100;
        if (resultadoVP < 0) {
          alert("Usted tiene la caja en negativo, revise los parametros");
          alert("Usted adeuda " + resultadoVP);
        } else {
          alert("el resultado de la caja es " + resultadoVP);
        }
        totalCajaInicio = totalCajaInicio + resultadoVP;
      }

      cajaDiaria();

    case "stock":
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
          let raspadita15 = prompt(
            "cuantos raspaditas de $15 tiene actualmente?"
          );
          stock[1] = raspadita15;
          let raspadita100 = prompt(
            "cuantos raspaditas de $100 tiene actualmente?"
          );
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

    case "permisos":
      function permition() {
        function Usuario(user, pass) {
          this.user = user;
          this.pass = pass;
        }
        const nUsuario = prompt("Ingrese nuevo usuario a la base de datos: ");
        const nPassword = prompt("Ingrese la contraseña: ");

        newUser = new Usuario(nUsuario, nPassword);
        agregar();
      }

      function agregar() {
        userDB.push(newUser);
        console.log(newUser);
        alert("usted debe relogearse");
      }
      function mostrarUsers() {
        for (let elemento of userDB) {
          let contenedor = document.createElement("div");
          contenedor.innerHTML = `
        <h2>Usuario: ${elemento.user}</h2>
        <h2>Contraseña: ${elemento.pass}</h2>`;
          document.body.appendChild(contenedor);
        }
      }
      mostrarUsers();
      permition();
      login();
      menu();
  }
}
menu();

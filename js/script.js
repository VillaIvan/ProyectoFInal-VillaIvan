const userDB = [
  { user: "admin", pass: "1234" },
  { user: "ivan", pass: "villa" },
  { user: "coder", pass: "house" },
];

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

    if (validUser >= 0 && validPass >= 0) {
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

        var difVentasD = difVentas().toFixed(2);

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
          let cant = parseFloat(
            prompt("ingrese cantidad de telekinos vendidos")
          );
          let valorTk = 150;
          let total = 0;
          for (i = 0; i <= cant; i++) {
            total = i * valorTk;
          }
          return total;
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
      }
      cajaDiaria();
      break;

    case "stock":
      break;

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
      permition();
      login();
      menu();
  }
}
menu();

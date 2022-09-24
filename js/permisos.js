import { userDB } from "./data/stockExport.js";

const valDB = JSON.parse(localStorage.getItem("userDBS"));
let titles = document.querySelector(".titles");
const showU = document.getElementById("showU");
let botonUsers = document.getElementById("agregar");

const calcJson = (elemento) => {
  let calc = JSON.stringify(elemento);
  return calc;
};

botonUsers.addEventListener("click", () => {
  permition();
});

let botonShow = document.getElementById("showUsers");
botonShow.addEventListener("click", () => {
  showAdm();
});

if (valDB === null) {
  let userDBJson = calcJson(userDB);
  localStorage.setItem("userDB", userDB);
  localStorage.setItem("userDBS", userDBJson);
}

function permition() {
  function Usuario(user, pass) {
    this.user = user;
    this.pass = pass;
  }
  const nUsuario = document.getElementById("usuarioN").value;
  const nPassword = document.getElementById("passN").value;
  let newUser = new Usuario(nUsuario, nPassword);
  userDB.push(newUser);
  const userDBJson = JSON.stringify(userDB);
  localStorage.setItem("userDB", userDB);
  localStorage.setItem("userDBS", userDBJson);
}

function mostrarUsers() {
  let valDB = JSON.parse(localStorage.getItem("userDBS"));
  titles.hidden = true;

  for (let elemento of valDB) {
    setTimeout(function () {
      let contenedor = document.createElement("div");
      contenedor.className = "contChilds";

      contenedor.innerHTML = `

  <div class="card" style="width: 15rem;">
  <div class="card-body">
  <h3>Usuario: <br> ${elemento.user}</h3>
  <h3>Contraseña: <br> ${elemento.pass}</h3>
    
  </div>
</div>`;

      showU.appendChild(contenedor);
    }, 1000);
  }
}

function mostrarAdmin() {
  fetch("data.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      setTimeout(function () {
        data.forEach(function (admin) {
          let contenedor = document.createElement("div");
          contenedor.className = "contChilds";
          contenedor.innerHTML = `
      
      <div class="card" style="width: 15rem;">
      <div class="card-body">
      <h3>Usuario: <br> ${admin.user}</h3>
      <h3>Contraseña: <br> ${admin.pass}</h3>
      
      </div>
      </div>`;
          showU.appendChild(contenedor);
        });
      }, 1000);
    });
}

async function showAdm() {
  let adm = await mostrarAdmin();
  let users = await mostrarUsers();
}

import { userDB } from "./data/stockExport.js";

let titles = document.querySelector(".titles");
const showU = document.getElementById("showU");
let botonUsers = document.getElementById("agregar");
botonUsers.addEventListener("click", () => {
  permition();
});

let botonShow = document.getElementById("showUsers");
botonShow.addEventListener("click", () => {
  mostrarUsers();
});

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
  console.log(localStorage.userDB);
  titles.hidden = true;

  for (let elemento of userDB) {
    console.log(elemento);
    let contenedor = document.createElement("div");
    contenedor.className = "contChilds";
    contenedor.innerHTML = `

  <div class="card" style="width: 18rem;">
  <div class="card-body">
  <h3>Usuario: <br> ${elemento.user}</h3>
  <h3>Contraseña: <br> ${elemento.pass}</h3>
    <a href="#" class="btn btn-primary">Eliminar</a>
  </div>
</div>`;

    showU.appendChild(contenedor);
  }
}

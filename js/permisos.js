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
}

function mostrarUsers() {
  localStorage.clear();
  const userDBJson = JSON.stringify(userDB);
  localStorage.setItem("userDB", userDBJson);
  console.log(localStorage.userDB);
  titles.classList.add("animate__animated");
  titles.classList.add("animate__backOutLeft");
  titles.style.display = "none";

  for (let elemento of userDB) {
    console.log(elemento);
    let contenedor = document.createElement("div");
    contenedor.className = "contChilds";
    contenedor.innerHTML = `
   <h3>Usuario: ${elemento.user}</h3>
  <h3>Contraseña: ${elemento.pass}</h3>`;
    showU.appendChild(contenedor);
  }
}

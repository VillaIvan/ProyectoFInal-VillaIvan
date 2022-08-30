import { userDB } from "./data/stockExport.js";

let botonLogin = document.getElementById("btnLogin");
let formLogin = document.querySelector(".form-login");
let menuMain = document.querySelector(".menu");
let navBar = document.querySelector(".navbar");
botonLogin.addEventListener("click", login);

function validate() {
  let storageValidator = sessionStorage.getItem("loginSuccess");
  let storageVJson = JSON.parse(storageValidator);
  if (storageVJson == true) {
    alert("usted ya estaba logeado. Reingrese sus datos");
    navBar.classList.remove("inactive");
  }
}
validate();

function login(usuario, password) {
  usuario = document.getElementById("user").value;
  password = document.getElementById("password").value;

  const validUser = userDB.findIndex((elemento) => {
    return elemento.user === usuario;
  });
  const validPass = userDB.findIndex((elemento) => {
    return elemento.pass === password;
  });
  if (validUser === validPass && validUser != -1 && validPass != -1) {
    formLogin.addEventListener("click", () => {
      formLogin.classList.add("inactive");
      menuMain.classList.remove("inactive");
      navBar.classList.remove("inactive");
    });
    sessionStorage.setItem("loginSuccess", true);
    alert("Bienvenido Usuario!");
  } else {
    alert("Identificacion incorrecta");
  }
}

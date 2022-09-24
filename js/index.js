import { userDB } from "./data/stockExport.js";

let botonLogin = document.getElementById("btnLogin");
let formLogin = document.querySelector(".form-login");
let menuMain = document.querySelector(".menu");
let navBar = document.querySelector(".navbar");
botonLogin.addEventListener("click", login);
let valDB = JSON.parse(localStorage.getItem("userDBS"));
console.log(valDB);

///////////////TEST////////////////
// let tested = document.getElementById("test");
// const valDB = localStorage.getItem("userDB");
// tested.addEventListener("click", () => {
//   console.log(valDB);
// });
////////////////////////////////////

menuMain.hidden = true;
navBar.hidden = true;
formLogin.hidden = false;

function validate() {
  let storageValidator = sessionStorage.getItem("loginSuccess");
  let storageVJson = JSON.parse(storageValidator);
  if (storageVJson == true) {
    Swal.fire("", "USTED YA HA INGRESADO UNA CUENTA", "warning");
    navBar.hidden = false;
  }
}
validate();

function login(usuario, password) {
  if (valDB) {
    valDB != userDB ? valDB : valDB == userDB;
    console.log(valDB);
    usuario = document.getElementById("user").value;
    password = document.getElementById("password").value;
    const validUserV = valDB.findIndex((elemento) => {
      return elemento.user === usuario;
    });
    const validPassV = valDB.findIndex((elemento) => {
      return elemento.pass === password;
    });
    if (validUserV === validPassV && validUserV != -1 && validPassV != -1) {
      formLogin.addEventListener("click", () => {
        formLogin.hidden = true;
        menuMain.hidden = false;
        navBar.hidden = false;
      });
      sessionStorage.setItem("loginSuccess", true);
      Swal.fire("Bienvenido Usuario!", "", "success");
    } else {
      Swal.fire(
        "ERROR",
        "Identificacion incorrecta. Reingrese sus datos",
        "error"
      );
    }
  } else {
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
        formLogin.hidden = true;
        menuMain.hidden = false;
        navBar.hidden = false;
      });
      sessionStorage.setItem("loginSuccess", true);
      Swal.fire("Bienvenido Usuario!", "", "success");
    } else {
      Swal.fire(
        "ERROR",
        "Identificacion incorrecta. Reingrese sus datos",
        "error"
      );
    }
  }
}

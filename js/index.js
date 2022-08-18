const userDB = [
  { user: "admin", pass: "1234" },
  { user: "ivan", pass: "villa" },
  { user: "coder", pass: "house" },
];

function login(usuario, password) {
  formLogin = document.querySelector(".form-login");
  menuMain = document.querySelector(".menu");
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
    });
    alert("Bienvenido Usuario!");
  } else {
    alert("Identificacion incorrecta");
  }
}

let botonLogin = document.getElementById("btnLogin");
botonLogin.addEventListener("click", login);

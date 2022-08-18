function permition() {
  function Usuario(user, pass) {
    this.user = user;
    this.pass = pass;
  }
  const nUsuario = document.getElementById("usuarioN").value;
  const nPassword = document.getElementById("passN").value;
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

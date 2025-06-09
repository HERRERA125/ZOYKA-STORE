function guardarRegistro() {
  const nombre = document.querySelector("#nombre").value;
  const correo = document.querySelector("#correo").value;
  const contrasena = document.querySelector("#contrasena").value;
  const perro = document.querySelector("#perro").checked;
  const gato = document.querySelector("#gato").checked;

  if (!nombre || !correo || !contrasena) {
    alert("Por favor, completa todos los campos obligatorios.");
    return;
  }

  const usuario = {
    nombre,
    correo,
    contrasena,
    mascota: perro ? "Perro" : gato ? "Gato" : "Ninguna",
  };

  localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));
  alert("¡Registro exitoso!");
  window.location.href = "login.html";
}

function validarLogin() {
  const correo = document.querySelector("#login-correo").value;
  const contrasena = document.querySelector("#login-contrasena").value;

  const usuarioGuardado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

  if (!usuarioGuardado) {
    alert("No hay usuarios registrados.");
    return;
  }

  if (
    correo === usuarioGuardado.correo &&
    contrasena === usuarioGuardado.contrasena
  ) {
    alert("Inicio de sesión exitoso");
    window.location.href = "index2.html"; // Redirige al usuario a la página principal
  } else {
    alert("Correo o contraseña incorrectos.");
  }
}

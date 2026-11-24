"use strict";

const texto = document.getElementById("t-texto");
const contador = document.getElementById("contador-t-texto");

function actualizarContador() {
  contador.textContent = `${texto.value.length} / 500`;
}
texto.addEventListener("input", actualizarContador);

iniciarFormulario({
  form: document.getElementById("form-testimonios"),
  estado: document.getElementById("estado-testimonios"),
  ids: ["t-autor", "t-texto"],
  validadores: {
    "t-autor": c => longitudEntre(c.value, 2, 50)
      ? "" : "El autor debe tener entre 2 y 50 caracteres.",
    "t-texto": c => longitudEntre(c.value, 10, 500)
      ? "" : "El testimonio debe tener entre 10 y 500 caracteres (sin contar espacios exteriores)."
  },
  alExito: datos => {
    const visibilidad = datos.get("publicar")
      ? "Se publicará."
      : "Queda privado porque no autorizaste su publicación.";
    return `Operación simulada correcta. Testimonio de ${datos.get("autor").trim()}. ${visibilidad}`;
  }
});
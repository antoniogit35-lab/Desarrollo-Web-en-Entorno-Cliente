"use strict";

const formSocios = document.getElementById("form-socios");
const estadoSocios = document.getElementById("estado-socios");
const idsSocios = ["nombre", "usuario", "correo", "edad", "modalidad",
                   "password", "password2", "telefono", "foto", "condiciones"];
const camposSocios = idsSocios.map(id => document.getElementById(id));
let intentadoSocios = false;

const validadoresSocios = {
  nombre: c => longitudEntre(c.value, 4, 50)
    ? "" : "El nombre debe tener entre 4 y 50 caracteres (sin contar espacios exteriores).",
  usuario: c => longitudEntre(c.value, 5, 20)
    ? "" : "El usuario debe tener entre 5 y 20 caracteres.",
  edad: c => {
    if (c.value.trim() === "") return "Introduce tu edad.";
    return enteroEnRango(c.valueAsNumber, 18, 100)
      ? "" : "La edad debe ser un número entero entre 18 y 100.";
  },
  modalidad: c => c.querySelector("input:checked")
    ? "" : "Elige una modalidad: mensual o anual.",
  password: c => (c.value.length >= 8 && c.value.length <= 16)
    ? "" : "La contraseña debe tener entre 8 y 16 caracteres.",
  password2: c => {
    if (c.value === "") return "Confirma la contraseña.";
    return c.value === document.getElementById("password").value
      ? "" : "Las contraseñas no coinciden.";
  },
  telefono: c => c.value.trim() === "" ? "Introduce un teléfono." : "",
  foto: c => {
    const f = c.files[0];
    if (!f) return "Selecciona una foto de perfil.";
    if (f.type !== "image/jpeg") return "La foto debe ser JPEG.";
    if (f.size > 5_000_000) return "La foto supera los 5.000.000 bytes.";
    return "";
  },
  condiciones: c => c.checked ? "" : "Debes aceptar las condiciones."
};

function revalidarSocios(evento) {
  estadoSocios.textContent = "";
  if (!intentadoSocios) return;
  const campo = evento.target;
  const objetivo = campo.name === "modalidad"
    ? document.getElementById("modalidad") : campo;
  if (!camposSocios.includes(objetivo)) return;
  validarCampo(objetivo, validadoresSocios);
  if (campo.id === "password") {
    const conf = document.getElementById("password2");
    if (conf.value !== "") validarCampo(conf, validadoresSocios);
  }
}

formSocios.addEventListener("submit", evento => {
  evento.preventDefault();
  intentadoSocios = true;
  estadoSocios.textContent = "";
  if (!validarFormulario(camposSocios, validadoresSocios)) return;

  const datos = new FormData(formSocios);
  datos.set("nombre", datos.get("nombre").trim());
  datos.set("usuario", datos.get("usuario").trim());
  // Resumen seguro: nunca contraseña ni archivo
  estadoSocios.textContent =
    `Operación simulada correcta. Socio: ${datos.get("nombre")}, ` +
    `usuario: ${datos.get("usuario")}, modalidad: ${datos.get("modalidad")}.`;
});

formSocios.addEventListener("input", revalidarSocios);
formSocios.addEventListener("change", revalidarSocios);
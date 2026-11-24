"use strict";

function mostrarError(campo, mensaje) {
  const salida = document.getElementById(`error-${campo.id}`);
  salida.textContent = mensaje;
  campo.setAttribute("aria-invalid", String(mensaje !== ""));
}

function limpiarError(campo) {
  if (typeof campo.setCustomValidity === "function") campo.setCustomValidity("");
  mostrarError(campo, "");
}

function validarCampo(campo, validadores) {
  limpiarError(campo);
  const regla = validadores[campo.id];
  let mensaje = regla ? regla(campo) : "";

  if (!mensaje && campo.validity) {
    if (campo.validity.valueMissing) mensaje = "Completa este campo.";
    else if (campo.validity.typeMismatch) mensaje = "El formato no es válido.";
  }
  if (mensaje && typeof campo.setCustomValidity === "function") {
    campo.setCustomValidity(mensaje);
  }
  mostrarError(campo, mensaje);
  return mensaje === "";
}

function validarFormulario(campos, validadores) {
  let primero = null;
  for (const campo of campos) {
    if (!validarCampo(campo, validadores) && !primero) primero = campo;
  }
  if (primero) {
    const foco = primero.tagName === "FIELDSET"
      ? primero.querySelector("input") : primero;
    foco.focus();
  }
  return primero === null;
}

function longitudEntre(texto, min, max) {
  const n = texto.trim().length;
  return n >= min && n <= max;
}

function enteroEnRango(numero, min, max) {
  return Number.isInteger(numero) && numero >= min && numero <= max;
}

function esJpegValido(archivo, maxBytes = 5_000_000) {
  return Boolean(archivo) && archivo.type === "image/jpeg" && archivo.size <= maxBytes;
}

function iniciarFormulario({ form, ids, validadores, estado, alExito, alEditar }) {
  const campos = ids.map(id => document.getElementById(id));
  let intentado = false;

  form.addEventListener("submit", evento => {
    evento.preventDefault();
    intentado = true;
    estado.textContent = "";
    if (!validarFormulario(campos, validadores)) return;
    estado.textContent = alExito(new FormData(form));
  });

  function revalidar(evento) {
    estado.textContent = "";
    if (alEditar) alEditar(evento);
    if (!intentado) return;
    const objetivo = evento.target.type === "radio"
      ? document.getElementById(evento.target.name) : evento.target;
    if (campos.includes(objetivo)) validarCampo(objetivo, validadores);
  }
  form.addEventListener("input", revalidar);
  form.addEventListener("change", revalidar);
}

function validarJpeg(campo, maxBytes = 5_000_000) {
  const f = campo.files[0];
  if (!f) return "Selecciona una imagen.";
  if (f.type !== "image/jpeg") return "La imagen debe ser JPEG.";
  if (f.size > maxBytes) return `La imagen supera los ${maxBytes} bytes.`;
  return "";
}

function fechaLocal(valor) {
  const partes = valor.split("-").map(Number);
  if (partes.length !== 3 || partes.some(n => !Number.isInteger(n))) return null;
  const [a, m, d] = partes;
  const fecha = new Date(a, m - 1, d);
  const existe = fecha.getFullYear() === a && fecha.getMonth() === m - 1 && fecha.getDate() === d;
  return existe ? fecha : null;
}

function esDiaPosteriorAHoy(valor, ahora = new Date()) {
  const fecha = fechaLocal(valor);
  if (!fecha) return false;
  const hoy = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate());
  return fecha > hoy;
}

function instanteLocal(valor) {
  if (valor === "") return null;
  const fecha = new Date(valor);
  return Number.isNaN(fecha.getTime()) ? null : fecha;
}

function esInstanteFuturo(valor, ahora = new Date()) {
  const instante = instanteLocal(valor);
  return instante !== null && instante > ahora;
}
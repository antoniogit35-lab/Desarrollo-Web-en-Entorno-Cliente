"use strict";

const LETRA = "A-Za-záéíóúüñÁÉÍÓÚÜÑ";
const RE_NOMBRE = new RegExp(`^[${LETRA}]+(?: [${LETRA}]+)*$`);
const RE_USUARIO = /^[A-Za-z][A-Za-z0-9]{4,19}$/;
const RE_PASSWORD = /^[A-Za-z][A-Za-z0-9_]{7,15}$/;
const RE_TELEFONO = /^\+34 [6-9]\d{2} \d{3} \d{3}$/;
const RE_CODIGO = /^DEP-\d{3}$/;
const RE_REFERENCIA = /^(?:CITA|RES)-\d{4}$/;

function normalizarEspacios(texto) {
  return texto.replace(/^ +| +$/g, "").replace(/ {2,}/g, " ");
}

function validarNombre(texto) {
  const n = normalizarEspacios(texto);
  return n.length >= 4 && n.length <= 50 && RE_NOMBRE.test(n);
}
function validarUsuario(texto) { return RE_USUARIO.test(texto.trim()); }
function validarPassword(texto) { return RE_PASSWORD.test(texto); }
function validarTelefono(texto) { return RE_TELEFONO.test(texto.trim()); }
function validarCodigoServicio(texto) { return RE_CODIGO.test(texto.trim()); }
function validarReferenciaCita(texto) { return RE_REFERENCIA.test(texto.trim()); }

function extraerCifras(texto) { return texto.match(/\d+/g) ?? []; }

function separarEtiquetas(texto) {
  return texto.split(/\s*,\s*/).map(e => e.trim()).filter(e => e !== "");
}

if (typeof module !== "undefined") {
  module.exports = { normalizarEspacios, validarNombre, validarUsuario,
    validarPassword, validarTelefono, validarCodigoServicio,
    validarReferenciaCita, extraerCifras, separarEtiquetas };
}
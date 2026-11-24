"use strict";

const formDemo = document.getElementById("form-demo");
const codigoDemo = document.getElementById("d-codigo");

formDemo.addEventListener("submit", evento => {
  evento.preventDefault();
  const resultadoJs = validarCodigoServicio(codigoDemo.value);
  document.getElementById("estado-demo").textContent =
    `El navegador lo da por válido con pattern. Mi validador JavaScript: ${resultadoJs ? "válido" : "inválido"}.`;
});
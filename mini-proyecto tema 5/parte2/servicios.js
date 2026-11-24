"use strict";

iniciarFormulario({
  form: document.getElementById("form-servicios"),
  estado: document.getElementById("estado-servicios"),
  ids: ["s-nombre", "s-duracion", "s-precio", "s-categoria", "s-codigo"],
  validadores: {
    "s-nombre": c => longitudEntre(c.value, 3, 50)
      ? "" : "El nombre debe tener entre 3 y 50 caracteres.",

    "s-duracion": c => {
      if (c.value.trim() === "") return "Introduce la duración en minutos.";
      const n = c.valueAsNumber;
      if (!Number.isInteger(n)) return "La duración debe ser un número entero de minutos.";
      if (n < 15 || n % 15 !== 0) return "La duración debe ser de 15 minutos o más, en múltiplos de 15.";
      return "";
    },

    "s-precio": c => {
      if (c.value.trim() === "") return "Introduce el precio.";
      const n = c.valueAsNumber;
      if (!Number.isFinite(n)) return "El precio debe ser un número válido.";
      if (n < 0 || n > 9999.99) return "El precio debe estar entre 0 y 9999,99.";
      if (c.validity.stepMismatch) return "El precio admite como máximo dos decimales.";
      return "";
    },

    "s-categoria": c => c.value === "" ? "Selecciona una categoría." : "",

        "s-codigo": c => validarCodigoServicio(c.value) ? ""
      : "Usa el formato DEP- seguido de tres cifras (ej. DEP-007).",
  },
    alExito: datos =>
      `Operación simulada correcta. Servicio: ${datos.get("nombre").trim()} ` +
      `(${datos.get("duracion")} min, ${datos.get("precio")} €), código ${datos.get("codigo").trim()}.`
});
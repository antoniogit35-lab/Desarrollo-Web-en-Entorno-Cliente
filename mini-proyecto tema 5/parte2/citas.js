"use strict";

const textoOpcion = id => {
  const s = document.getElementById(id);
  return s.selectedOptions[0].textContent;
};

iniciarFormulario({
  form: document.getElementById("form-citas"),
  estado: document.getElementById("estado-citas"),
  ids: ["c-socio", "c-servicio", "c-fecha", "c-ref", "c-confirmar"],
  validadores: {
    "c-socio": c => c.value === "" ? "Selecciona un socio." : "",
    "c-servicio": c => c.value === "" ? "Selecciona un servicio." : "",
    "c-fecha": c => {
      if (c.value === "") return "Elige fecha y hora para la cita.";
      return esInstanteFuturo(c.value)
        ? "" : "La cita debe ser posterior al momento actual.";
    },
    "c-ref": c => validarReferenciaCita(c.value) ? ""
      : "Usa CITA- o RES- seguido de cuatro cifras.",
    "c-confirmar": c => c.checked ? "" : "Confirma que has revisado los datos."
  },
    alExito: datos =>
      `Operación simulada correcta. Cita de ${textoOpcion("c-socio")} para ` +
      `${textoOpcion("c-servicio")} el ` +
      `${instanteLocal(datos.get("fecha")).toLocaleString("es-ES")}. ` +
      `Referencia: ${datos.get("ref").trim()}.`
});
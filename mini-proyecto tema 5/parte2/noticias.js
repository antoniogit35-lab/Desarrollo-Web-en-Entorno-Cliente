"use strict";

iniciarFormulario({
  form: document.getElementById("form-noticias"),
  estado: document.getElementById("estado-noticias"),
  ids: ["n-titulo", "n-contenido", "n-fecha", "n-imagen"],
  validadores: {
    "n-titulo": c => longitudEntre(c.value, 3, 100)
      ? "" : "El título debe tener entre 3 y 100 caracteres.",
    "n-contenido": c => longitudEntre(c.value, 20, 2000)
      ? "" : "El contenido debe tener entre 20 y 2000 caracteres.",
    "n-fecha": c => {
      if (c.value === "") return "Elige una fecha de publicación.";
      return esDiaPosteriorAHoy(c.value)
        ? "" : "La fecha debe ser posterior a hoy (hoy no es válido).";
    },
    "n-imagen": c => validarJpeg(c)
  },
    alExito: datos => {
      const etiquetas = separarEtiquetas(datos.get("etiquetas"));
      const textoEtiquetas = etiquetas.length ? etiquetas.join(", ") : "ninguna";
      return `Operación simulada correcta. Noticia «${datos.get("titulo").trim()}» ` +
        `programada para el ${fechaLocal(datos.get("fecha")).toLocaleDateString("es-ES")}. ` +
        `Etiquetas (${etiquetas.length}): ${textoEtiquetas}.`;
    }
});
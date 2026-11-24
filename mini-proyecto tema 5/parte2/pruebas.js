const v = require("./validadores.js");
let fallos = 0;
function t(desc, obtenido, esperado) {
  const ok = JSON.stringify(obtenido) === JSON.stringify(esperado);
  if (!ok) fallos++;
  console.log(`${ok ? "OK  " : "FALLO"} ${desc}`);
}

t("nombre ' Ana  López ' normaliza", v.normalizarEspacios(" Ana  López "), "Ana López");
t("nombre válido", v.validarNombre(" Ana  López "), true);
t("nombre con cifra", v.validarNombre("Ana2 López"), false);
t("nombre 3 chars", v.validarNombre("Ana"), false);
t("nombre 4 chars", v.validarNombre("Anaa"), true);
t("nombre 50 chars", v.validarNombre("A".repeat(50)), true);
t("nombre 51 chars", v.validarNombre("A".repeat(51)), false);
t("nombre con guion", v.validarNombre("Ana-López"), false);

t("usuario ana77", v.validarUsuario("ana77"), true);
t("usuario 7ana7", v.validarUsuario("7ana7"), false);
t("usuario ana_7", v.validarUsuario("ana_7"), false);
t("usuario 4 chars", v.validarUsuario("ana7"), false);
t("usuario 20 chars", v.validarUsuario("a" + "1".repeat(19)), true);
t("usuario 21 chars", v.validarUsuario("a" + "1".repeat(20)), false);

t("pass Clave_12", v.validarPassword("Clave_12"), true);
t("pass 1Clave_2", v.validarPassword("1Clave_2"), false);
t("pass Clave-12", v.validarPassword("Clave-12"), false);
t("pass 7 chars", v.validarPassword("Clave_1"), false);
t("pass 16 chars", v.validarPassword("C" + "1".repeat(15)), true);
t("pass 17 chars", v.validarPassword("C" + "1".repeat(16)), false);

t("tel correcto", v.validarTelefono("+34 612 345 678"), true);
t("tel sin +", v.validarTelefono("34 612 345 678"), false);
t("tel sin espacios", v.validarTelefono("+34612345678"), false);
t("tel primera cifra 5", v.validarTelefono("+34 512 345 678"), false);
t("tel una cifra de más", v.validarTelefono("+34 612 345 6789"), false);

t("DEP-007", v.validarCodigoServicio("DEP-007"), true);
t("dep-007", v.validarCodigoServicio("dep-007"), false);
t("DEP-07", v.validarCodigoServicio("DEP-07"), false);
t("XDEP-007", v.validarCodigoServicio("XDEP-007"), false);
t("CITA-0001", v.validarReferenciaCita("CITA-0001"), true);
t("RES-0001", v.validarReferenciaCita("RES-0001"), true);
t("XCITA-0001", v.validarReferenciaCita("XCITA-0001"), false);
t("RES-001", v.validarReferenciaCita("RES-001"), false);

t("cifras", v.extraerCifras("Hay 12 clases y 3 pistas"), ["12", "3"]);
t("sin cifras", v.extraerCifras("Sin números"), []);
t("etiquetas", v.separarEtiquetas("club, salud, , verano"), ["club", "salud", "verano"]);
t("etiquetas vacías", v.separarEtiquetas(" , ,, "), []);

console.log(fallos === 0 ? "Todas las pruebas pasan" : `${fallos} fallos`);
process.exitCode = fallos ? 1 : 0;
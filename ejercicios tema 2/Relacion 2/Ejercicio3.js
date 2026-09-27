let nombre = "Ana Lopez";
let profesion = "Administrativa";
let anios = 3;
let sueldoBase = 1200;
let plusPorcentaje = 0.1;

let mensaje = `Nombre de la empleada: ${nombre}, profesión: ${profesion}, tiene ${anios} años de antigüedad y su sueldo base es de: ${sueldoBase} €.`;
let plusMensual = (plusPorcentaje * sueldoBase) * anios;
let sueldoTotal = sueldoBase + plusMensual;


console.log(mensaje);
console.log("Plus: ", plusMensual.toFixed(2), " €, Total: ", sueldoTotal.toFixed(2), " €");
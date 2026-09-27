let precioBase = 100;
let iva = 0.21;

let importeIva = precioBase * iva;
let importeTotal = precioBase * (1 + iva);

console.log("Base: ", precioBase.toFixed(2), " €");
console.log("Impuesto: ", importeIva.toFixed(2), " €");
console.log("Total: ", importeTotal.toFixed(2), " €");

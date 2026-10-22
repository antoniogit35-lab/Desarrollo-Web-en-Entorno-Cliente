const precios = [10, 20, 100];
const IVA = 0.21;

const preciosConIVA = precios.map(precio => precio * (1 + IVA))

console.log(preciosConIVA);
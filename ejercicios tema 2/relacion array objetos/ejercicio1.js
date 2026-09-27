const colores = ["rojo", "azul", "verde", "amarillo"];
let busqueda = "AZUL";

busqueda = busqueda.trim().toLowerCase();

const resultado = colores.includes(busqueda) 
    ? " encontrado" 
    : "no encontrado";

console.log(resultado);
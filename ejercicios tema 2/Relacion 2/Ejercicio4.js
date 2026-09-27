const nombres = ["ana", "luis", "marta", "pedro", "lucia", "carlos", "elena"];

let respuesta = prompt("Introduce un nombre:");

let nombre = respuesta === null ? null : respuesta.trim().toLowerCase();

console.log(
    respuesta === null 
        ? "Consulta cancelada" 
        : nombre === "" 
            ? "Nombre vacío" 
            : nombres.includes(nombre) 
                ? `Hola, ${nombre}` 
                : "No está en la lista"
);
function edadPerroHumana (edadPerro) {
    return edadPerro * 7;
}

let entrada;
let edad;

while(true) {
    entrada = prompt("Introduce la edad del perro (Debe ser mayor que 0 y menor que 30): ");

    if (entrada === null) break;

    edad = Number(entrada);

    if (!Number.isFinite(edad) || 
        edad <= 0 || 
        edad >= 30){
            alert("Error: Introduce un número mayor que 0 y menor que 30.");
            continue;
    }

    break;

}


if (entrada !== null) {
    const edadHumana = edadPerroHumana(edad);
    alert(`La edad humana equivalente a ${edad} años de perro es: ${edadHumana} años`);
}
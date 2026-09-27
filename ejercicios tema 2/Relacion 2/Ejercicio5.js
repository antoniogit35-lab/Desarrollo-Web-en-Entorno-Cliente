let cesta = [];
let continuar = true;

while (continuar) {
    let respuesta = prompt("Introduce un producto:");
    let producto;

    respuesta === null
        ? continuar = false
        : (
            producto = respuesta.trim(),
            producto === ""
                ? console.log("El producto no puede estar vacío")
                : cesta.push(producto)
        );
}

cesta.length === 0
    ? console.log("Lista vacía")
    : (
        console.log(`Lista final: ${cesta.join(", ")}`),
        console.log(`Número de productos: ${cesta.length}`)
    );

const valores = [2, 5, 3];

function sumarArray(...array) {
    let total = 0;
    for (const valor of array) {
        total += valor;
    }
    return total;
}

console.log(`La suma de los valores del array es de : ${sumarArray(...valores)}`);
console.log(`La suma de los valores del array es de : ${sumarArray()}`);
const numeros = [-8, -3, -12, -1, -16];
let mayor = numeros[0];

for (const numero of numeros) {
    if (numero > mayor) {
        mayor = numero;
    }
}

console.log(`El número mayor del array es: ${mayor}.`);
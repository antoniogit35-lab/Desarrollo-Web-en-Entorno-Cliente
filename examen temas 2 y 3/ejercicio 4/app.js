const notas = [4, 7, 5, 3, 9, 6];
let aprobados = 0;
let suspensos = 0;

for (const nota of notas) {
    nota >= 5 ? aprobados++ : suspensos++;
}

console.log(`El número de aprobados es: ${aprobados}`);
console.log(`El número de suspensos es: ${suspensos}`);
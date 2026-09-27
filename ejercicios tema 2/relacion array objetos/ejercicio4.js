const coche = {
    marca: "Toyota",
    modelo: "Yaris",
    anio: 2020,

    calcularAntiguedad() {
        const anioActual = new Date().getFullYear();
        const anioCoche = this.anio;

        if (!Number.isInteger(anioCoche) || 
            anioCoche < 1886 || 
            anioCoche > anioActual
        ) {
            return null
        }

        return anioActual - anioCoche;
    }
};

const antiguedad = coche.calcularAntiguedad();

if (antiguedad === null) {
    console.log("Año no válido");
} else {
    console.log(`El coche tiene ${antiguedad} años`);
}

coche.anio = new Date().getFullYear();
console.log(coche.calcularAntiguedad())

coche.anio = new Date().getFullYear() + 1;
console.log(coche.calcularAntiguedad())
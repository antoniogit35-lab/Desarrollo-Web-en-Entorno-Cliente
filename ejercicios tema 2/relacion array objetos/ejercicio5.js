const tienda = {
    productos: [
        {nombre: "Cuaderno", precio: 4},
        {nombre: "Bolígrafo", precio: 2},
        {nombre: "Mochila", precio: 25}
    ],

    calculatTotal() {
        let total = 0;

        for (let i = 0; i < this.productos.length; i++) {
            total += this.productos[i].precio;
        }

        return total;
    }
};

const total = tienda.calculatTotal();
console.log(`Total: ${total.toFixed(2)} €`);

tienda.productos = [];
const totalVacio = tienda.calculatTotal();
console.log(`Total (Array vacio): ${totalVacio.toFixed(2)} €`);

tienda.productos = [
        {nombre: "Cuaderno", precio: 4},
        {nombre: "Bolígrafo", precio: 2},
        {nombre: "Mochila", precio: 25},
        {nombre: "Estuche", precio: 6}
];

const totalConEstuche = tienda.calculatTotal();
console.log(`Total (Con Estuche): ${totalConEstuche.toFixed(2)} €`);
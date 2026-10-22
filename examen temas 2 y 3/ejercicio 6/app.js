const cliente = { nombre: "Ana", descuento: 0 };

const { nombre, descuento } = cliente;

const descuentoAplicado = descuento ?? 10;

console.log(`El nombre es ${nombre} y su descuento es de: ${descuentoAplicado} €.`);

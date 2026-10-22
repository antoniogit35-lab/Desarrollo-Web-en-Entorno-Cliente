export function nombresDisponibles(productos, precio) {
    const disponibles = productos.filter(
        producto => producto.disponible === true && 
        producto.precio <= 25); 

    const nombres = disponibles.map(producto => producto.nombre);

    return nombres;
}
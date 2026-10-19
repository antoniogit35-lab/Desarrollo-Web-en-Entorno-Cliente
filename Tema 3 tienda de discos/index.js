 const contenedor = document.querySelector('.grid');

 tienda.forEach(disco => {
    const tarjeta = document.createElement('article');
    tarjeta.classList.add('tarjeta');

    const imagen = document.createElement('img');
    imagen.src = disco.caratula;
    imagen.alt = `Caratula de ${disco.titulo}`;

    imagen.onerror = function() {
        this.onerror = null;
        this.src = 'img/default.png';
        imagen.classList.add('error');
    };

    const info = document.createElement('div');
    info.classList.add('info');

    const titulo = document.createElement('h2');
    titulo.textContent = disco.titulo;

    const artista = document.createElement('p');
    artista.textContent = `Artista: ${disco.artista}`;

    const pais = document.createElement('p');
    pais.textContent = `País: ${disco.pais}`;

    const publicacion = document.createElement('p');
    publicacion.textContent = `Año: ${disco.publicacion}`;

    const copias = document.createElement('p');
    copias.textContent = `Copias vendidas: ${disco.copias} mil`;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.textContent = `€${disco.precio.toFixed(2)}`;

    info.append(titulo, artista, pais, publicacion, copias, precio);

    tarjeta.append(imagen, info);

    contenedor.append(tarjeta);
 });
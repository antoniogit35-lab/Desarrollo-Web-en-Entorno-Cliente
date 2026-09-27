let jamones = 23;
let empleados = 10;

let jamonesRepartidos = Math.floor(jamones / empleados);
let jamonesSinRepartir = jamones - (jamonesRepartidos * empleados);


console.log("Cada empleado recibe ", jamonesRepartidos, " jamones y sobran ", jamonesSinRepartir);
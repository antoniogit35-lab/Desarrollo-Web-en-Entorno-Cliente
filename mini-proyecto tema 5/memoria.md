# Memoria breve

## Patrones explicados por partes

- Nombre: `^[letras con tildes, ü, ñ]+(?: [letras]+)*$`. La clase de caracteres admite solo letras ASCII y las vocales con tilde, ü y ñ (mayúsculas y minúsculas). El grupo `(?: [letras]+)*` exige un único espacio entre palabras, sin espacios ni guiones sobrantes. Antes se normalizan los espacios y la longitud se comprueba aparte (4 a 50).
- Usuario: `^[A-Za-z][A-Za-z0-9]{4,19}$`. Empieza por letra, y los siguientes 4 a 19 caracteres son letras o cifras (5 a 20 en total).
- Contraseña: `^[A-Za-z][A-Za-z0-9_]{7,15}$`. Igual que el usuario, pero permite guion bajo y exige 8 a 16 caracteres.
- Teléfono: `^\+34 [6-9]\d{2} \d{3} \d{3}$`. Prefijo literal `+34` (el `+` se escapa), un espacio, una primera cifra 6 a 9 y tres grupos de tres cifras.
- Código de servicio: `^DEP-\d{3}$`. Literal `DEP-` y exactamente tres cifras.
- Referencia de cita: `^(?:CITA|RES)-\d{4}$`. Alternativa entre dos prefijos, agrupada sin captura, y cuatro cifras. Las anclas afectan a ambas alternativas.
- Normalización: `replace(/^ +| +$/g, "")` quita espacios exteriores y `replace(/ {2,}/g, " ")` reduce grupos de espacios a uno.
- Cifras: `match(/\d+/g)` con bandera global devuelve todas las secuencias; `?? []` devuelve un array vacío si no hay coincidencias.
- Etiquetas: `split(/\s*,\s*/)`, después `trim()` y descarte de las vacías.

## Banderas elegidas

- Sin `g` en los validadores con `test()`, porque con `g` la expresión guarda `lastIndex` y puede dar resultados alternos en llamadas repetidas.
- `g` solo en `match()` de cifras y en `replace()`, donde se quieren todas las coincidencias.
- Sin `i`, porque `dep-007` debe rechazarse.
- Sin `m`: `^` y `$` se refieren al principio y al final del texto completo.
- Anclas `^` y `$` en todos los validadores, para exigir el valor completo y no solo una parte.

## Formato frente a significado

Una expresión regular comprueba la forma del texto, no su significado. Un teléfono con formato correcto puede no existir, un correo bien formado puede no pertenecer al usuario y una fecha con forma válida puede no existir. Por eso las fechas, la edad y los archivos se validan con JavaScript, y `pattern` no sustituye a `required`.

## Qué debe validar de nuevo el servidor

La validación de cliente ayuda al usuario, pero puede modificarse o saltarse. El servidor debería repetir todas las reglas: longitudes, formatos, edad, fechas y contraseñas coincidentes. En los archivos debería comprobar el tipo real por su contenido (no solo la extensión ni `file.type`), el tamaño y la política de almacenamiento. Además, la contraseña nunca se guarda en claro y la conexión debe usar HTTPS.

## Pruebas

`node pruebas.js` en `parte2` ejecuta 37 comprobaciones de los validadores. Las pruebas de interfaz están en `pruebas.md` de cada parte.

# Pruebas · Parte 1 (Club de Taekwondo Nonote)

Rellena «Resultado obtenido» con *Correcto* o describe lo ocurrido. Si algo falló, anota la corrección.

## 1. Obligatoriedad y textos

| ID | Entrada | Resultado esperado | Resultado obtenido |
|---|---|---|---|
| T01 | Nombre de socio de 3 caracteres | Error | ![alt text](image.png) |
| T02 | Nombre de socio de 4 caracteres | Válido | ![alt text](image-1.png) |
| T03 | Nombre de socio de 50 caracteres | Válido | ![alt text](image-2.png) |
| T04 | Testimonio | ![alt text](image-3.png) |
| T05 | Testimonio solo con espacios | Error | ![alt text](image-4.png) |

## 2. Números

| ID | Entrada | Resultado esperado | Resultado obtenido |
|---|---|---|---|
| N01 | Edad vacía | Error: Introduce tu edad | ![alt text](image-5.png) |
| N02 | Edad 17 | Error | ![alt text](image-6.png) |
| N03 | Edad 18 | Válido | ![alt text](image-7.png) |
| N04 | Edad 18.5 | Error (no entero) | ![alt text](image-8.png) |
| N05 | Duración 14 | Error | ![alt text](image-9.png) |
| N06 | Duración 15 | Válido | ![alt text](image-10.png) |
| N07 | Duración 20 | Error (no múltiplo de 15) | ![alt text](image-11.png) |
| N08 | Precio vacío | Error (el vacío no es cero) | ![alt text](image-12.png) |
| N09 | Precio -1 | Error | ![alt text](image-13.png) |
| N10 | Precio 0 | Válido | ![alt text](image-14.png) |
| N11 | Precio 5.123 | Error (más de dos decimales) | ![alt text](image-15.png) |

## 3. Fechas y selecciones

| ID | Entrada | Resultado esperado | Resultado obtenido |
|---|---|---|---|
| F01 | Noticia con fecha de ayer | Error | ![alt text](image-16.png) |
| F02 | Noticia con fecha de hoy | Error (hoy no es válido) | ![alt text](image-17.png) |
| F03 | Noticia con fecha de mañana | Válido | ![alt text](image-18.png) |
| F04 | Cita con fecha y hora pasadas | Error | ![alt text](image-19.png) |
| F05 | Cita con fecha y hora futuras | Válido | ![alt text](image-20.png) |
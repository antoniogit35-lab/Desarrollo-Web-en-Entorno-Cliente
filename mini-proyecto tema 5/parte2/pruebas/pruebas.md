# Pruebas · Parte 2

Las pruebas unitarias están en `pruebas.js` (ejecutar con `node pruebas.js`; resultado: 37 casos correctos). Esta tabla recoge además la integración en el navegador.

## 1. Reglas de formato en la interfaz

| ID | Entrada | Resultado esperado | Resultado obtenido |
|---|---|---|---|
| R01 | Código DEP-007 | Válido | ![alt text](image.png) |
| R02 | Códigos dep-007, DEP-07, XDEP-007 | Error en cada caso | ![alt text](image-1.png) |
| R03 | Referencia CITA-0001 y RES-0001 | Válidas | ![alt text](image-2.png) |
| R04 | Referencias XCITA-0001 y RES-001 | Error en ambas | ![alt text](image-3.png) |

## 2. Métodos de texto

| ID | Entrada | Resultado esperado | Resultado obtenido |
|---|---|---|---|
| M01 | «Hay 12 clases y 3 pistas» + botón Extraer cifras | ["12","3"] | ![alt text](image-4.png) |
| M02 | Texto sin cifras | [] | ![alt text](image-5.png) |
| M03 | Etiquetas «club, salud, verano» | 3 etiquetas | ![alt text](image-6.png) |
| M04 | Etiquetas vacías o « , ,, » | 0 etiquetas (ninguna) | ![alt text](image-7.png) |

## 3. Demostración pattern frente a JavaScript

| ID | Entrada | Resultado esperado | Resultado obtenido |
|---|---|---|---|
| D01 | Código vacío | Nativo: bloquea por required. JS: inválido | ![alt text](image-8.png) |
| D02 | DEP-007 | Nativo: pasa. JS: válido | ![alt text](image-9.png) | - |
| D03 | DEP-007x (texto adicional) | Nativo: bloquea por pattern. JS: inválido | ![alt text](image-10.png) |
| D04 |  DEP-007 (espacio inicial) | Nativo: bloquea. JS: válido porque hace trim() | ![alt text](image-11.png) |
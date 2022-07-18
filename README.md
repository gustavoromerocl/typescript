# Curso de Typescript
Entidad: Udemy Profesor: Fernando Herrera

## Introducción a Typescript

### Instalación 

[Documentación](https://www.typescriptlang.org/download)

npm i -g typesript

### Hola mundo en typescript

Los navegadores no interpretan type script por lo que es necesario transpilar el código con el siguiente comando:

tsc nombre_archivo.ts

### TSConfig.json

tsc --init  

Estando configurado el proyecto con el archivo tsconfig, es posible transpilar todos los archivos contenidos indicando el comando "tsc" sin más agregaciones.

### Modo observador (watch mode)

Typescript viene a corregir los problemas que nos puede traer lo flexible que es javascript, al correr el observador integrado nos indica en tiempo de compilación los errores que tenemos en nuestro código, a diferencia de javascript que lo hace en tiempo de ejecución.  

tsc --watch o tsc -w
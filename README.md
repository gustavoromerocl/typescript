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

## Tipos básicos

### En esta sección aprenderemos:

¿Qué son los tipos de datos?

Una introducción a los diferentes tipos de datos que existen en TypeScript.  

-Booleanos.
-Números.
-Strings.
-Tipo Any.
-Arreglos.
-Tuplas.
-Enumeraciones
-Retorno void
-Null
-Undefined  

Y al final un exámen práctico y seguidamente un examen teórico.

### Introducción a los tipos de datos

### Más información sobre los tipos de datos

A continuación explicaremos todos los tipos de datos que soporta TypeScript uno por uno.

Si desean tener más información, pueden ver la documentación oficial de TypeScript sobre los tipos de datos aquí:

[Documentación](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

### Inferir tipos y modo estricto

Por default noImplicitAny viene activado en true, su funcionalidad es alertar cuando una variable ha sido declarada sin tipo de dato (any), podemos configurarlo en tsconfig.json

### booleans

### numbers

### strings

### any

### arrays

Se debe especificar el o los tipos de datos que va a recibir el arreglo

### tuples - tuplas

Las tuplas son arreglos con tipos de datos establecidos en sus posiciones

### Enum

### Void

### Never

### Null

// "strictNullChecks": true,    
La prop strictNullChecks presente en el archivo tsconfig.json nos permite que udefied se pueda pasar a otros tipos de dato, 
sin necesidad de especificarlo explicitamente

## Funciones y Objetos

¿Qué veremos en esta sección?
Esta sección esta enfocada en aprender como trabajan las funciones en TypeScript y también nos enfocaremos en aplicar buenas prácticas a la hora de crearlas.

Puntualmente tenemos:

- Declaraciones básicas de funciones
- Parámetros obligatorios
- Parámetros opcionales

### Funciones básicas

### Parámetros obligatorios de las funciones

### Parámetros opcioales de las funciones

### Parámetros por defecto

### Parámetros REST

### Tipo Función

## Sección 5: Objetos y tipos personalizados en Typescript

### ¿Qué veremos en esta sección?

Aprenderemos a utilizar los objetos en TypeScript, su uso y mantener nuestro código bien limpio mediante tipos personalizados.

Los temas serán:

Objetos básicos
Crear objetos con tipos específicos
Crear métodos dentro de objetos
Tipos personalizados
Crear variables que soporten varios tipos a la vez.
Comprobar el tipo de un objeto.
Al final, el respectivo examen práctico y teórico.

### Objetos básicos

### Crear objetos con tipos específicos

### Crear métodos dentro de objetos

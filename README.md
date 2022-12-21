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

### Tipos personalizados

### Multiples tipos

## Sección 6: Depuración de errores y el archivo tsconfig.json

### ¿Qué veremos en esta sección?

La sección se enfoca en la depuración de errores y comprender el archivo de configuración de TypeScript (el tsconfig.json)

Puntualmente:

Aprenderemos el ¿por qué siempre compila a JavaScript?
Para que nos puede servir el archivo de configuración de TypeScript
Realizaremos depuración de errores directamente a nuestros archivos de TypeScript
Removeremos todos los comentarios en nuestro archivo de producción.
Restringiremos al compilador que sólo vea ciertos archivos o carpetas
Crearemos un archivo final de salida
Aprenderemos a cambiar la version de JavaScript de salida
Adicionalmente tendrán el conocimiento necesario para compilar automáticamente cualquier archivo que se vaya creando al momento de ser insertado a nuestro proyecto.

### ¿Qué es el archivo tsconfig y para que nos puede servir?

https://www.typescriptlang.org/tsconfig

### ¿Es posible la depurqación del códdigo de typescript?

Mediante la opción sourceMap podemos apuntar las lineas de depuración de los logs a los archivos ts

### Remover comentarios de los archivos de javascript

Meadiante la opción removeComments de el archivo tsconfig podemos remover los comentarios para el paso a producción

### Incluir o excluir carpetas y/o archivos

### outFile - Archivo de salida

## Sección 7: Características de ES6 o javascript2015 disponibles a través de typescript

### ¿Qué veremos en esta sección?
JavaScript va actualizando año con año, y tenemos que estar enterados de todo lo nuevo para saber cómo le sacamos el máximo provecho!

Esta sección esta orientada a enseñarles un par de cosas muy útiles y necesarias del ES6 (ES2015 o ECMAScript 6), que ya podemos utilizar con toda confianza en TypeScript.

Aprenderemos sobre:

Diferencia entre declarar variables con VAR y con LET
Uso de constantes
Plantillas literales
Funciones de flecha
Destructuración de objetos
Destructuración de Arreglos
Nuevo ciclo, el FOR OF
Conocer sobre la programación orientada a objetos
Clases
Al final, un examen práctico y teórico para afianzar los conocimientos.

## Sección 8: Clases en typescript

### ¿Qué veremos en esta sección?
La programación orientada a objetos es un tema sumamente importante, especialmente si nuestras aplicaciones van de mediana a gran escala. TypeScript trae toda la potencia de una programación orientada a objetos a la web.

Toda la sección se enfoca en enseñar sobre el uso de clases.

Puntualmente aprenderemos sobre:

Crear clases en TypeScript
Constructores
Accesibilidad de las propiedades:
Públicas
Privadas
Protegidas
Métodos de las clases que pueden ser:
Públicos
Privados
Protegidos
Herencia
Llamar funciones del padre, desde los hijos
Getters 
Setters
Métodos y propiedades estáticas
Clases abstractas
Constructores privados.

## Sección 9: Interfaces

### ¿Qué veremos en esta sección?
Esta sección esta dedicada a crear interfaces, las cuales nos permitirán crear reglas o planos de como se deben de construir clases, métodos u objetos.

Puntualmente aprenderemos:

¿Por qué es necesario una interfaz?
¿Cómo creamos una interfaz básica?
Crear propiedades opcionales
Crear métodos
Asignar interfaces a las clases
Al final, tendremos un examen práctico y teórico sobre las interfaces.

## Sección 10: Namespaces

### ¿Qué veremos en esta sección?
TypeScript, es un lenguaje de programación web, que nos permite crear objetos que nos servirán a lo largo de nuestro programa. Los namespaces, existen para ayudarnos en la re utilización de nuestras variables, constantes y métodos.

Puntualmente aprenderemos sobre:

Explicación del ¿por qué son necesarios los namespaces?
Crear namespaces
Multiples namespaces en un mismo proyecto
Importar namespaces
Problemática que se puede presentar utilizando un namespace.

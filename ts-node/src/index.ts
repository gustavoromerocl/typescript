import { genericFunction, printObject, genericFunctionArrow } from "./generics/generics";

printObject('Hola mundo');

const name: string = 'Gustavo';
console.log(genericFunctionArrow(3.145872).toFixed(2));
console.log(genericFunctionArrow(name).toUpperCase());
console.log(genericFunctionArrow(new Date).getDate());


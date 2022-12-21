// import { genericFunction, printObject, genericFunctionArrow } from "./generics/generics";

import { genericFunctionArrow } from "./generics/generics";
import { Hero } from "./interfaces/hero";

// printObject('Hola mundo');

// const name: string = 'Gustavo';
// console.log(genericFunctionArrow(3.145872).toFixed(2));
// console.log(genericFunctionArrow(name).toUpperCase());
// console.log(genericFunctionArrow(new Date).getDate());

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130
}

console.log(genericFunctionArrow<Hero>(deadpool).name);
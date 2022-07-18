
// Si usamos constantes no se asigna automaticamente un tipo de dato en typescript
// const msg = "Hola mundo";

let msg = "Hola mundo";

//Esto genera un error ya que msg es de tipo string
//msg = 4;

//De esta forma podemos declarar una constante e indicarle el tipo de dato
const message: string = "hola mundo";

const hero = {
  name: 'Ironman',
  age: 45
}

console.log(hero.age);
console.log(message);
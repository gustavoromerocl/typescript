(()=>{
  const addNumber = (a:number, b:number) => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWorld = () => `El mundo esta salvado`;

  // let myFunction: Function;
  let myFunction: (y:number, z:number) => number;

  // myFunction = 10;
  // console.log(myFunction);

  myFunction = addNumber;
  console.log(myFunction(1, 2));

  // myFunction = greet;
  // console.log(myFunction('Gustavo'));

  // myFunction = saveTheWorld;
  // console.log(myFunction());

})()
(() => {
  let avengers: number = 10;
  //let avengers: number;
  console.log(avengers);

  const villians: number = 20;
  
  //Podemos identificar los valores que vienen undefined de manera precisa
  if (avengers < villians) {
    console.log("Estamos en problemas");
  } else {
    console.log("Nos salvamos");
  }

  //La siguiente operación retorna NaN, que en typescript es considerado un número, a diferencia de javascript
  avengers = Number('55A');

  console.log({avengers});
  
})()
(() => {
  let avenger: any = 123;
  const exists;
  let power;

  avenger = "Dr Strange";
  // console.log(avenger.charAt(0));
  console.log( (avenger as string).charAt(0));


  avenger = 150.23256415;
  console.log( <number>avenger.toFixed(2) );
  
  //Any no tiene restricciones de tipo de dato
  //Podemos castear el tipo de dato para habilitar la predicción de métodos
  console.log( exists ); 
  console.log( power );
})()
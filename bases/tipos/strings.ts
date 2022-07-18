(() => {
  const batman: string = "Batman";
  const linternaVerde: string = "Linterna verde";
  const volcanNegro: string = `Héroe: Volcan negro`;

  console.log(batman.toUpperCase());
  console.log(`I'm ${ batman }`)

  // ? : Valida que el elemento tenga un valor asignado, de lo contrario no ejecuta lo siguiente
  // Al pasarle el operador or se valida como una expresión thruty/falsy, por lo que podemos generar una opoeración con su resultado
  console.log( batman[10]?.toUpperCase() || "No está presente")
})()
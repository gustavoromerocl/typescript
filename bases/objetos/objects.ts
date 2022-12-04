(() => {
  let flash: { name:_string, age: number, powers: string[]} = {
    name: "Barry",
    age: 24,
    powers: ['Super velocidad', 'Viajar en el tiempo']
  }

  flash = {
    name: 'Otro nombre',
    age: 60,
    powers: ['Super fuerza'],
    // getNombre: ()=>{}
  }

console.log('flash', flash)
})()
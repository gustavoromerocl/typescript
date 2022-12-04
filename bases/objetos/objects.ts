(() => {
  let flash: { name: string, age: number, powers: string[], getName: () => string } = {
    name: "Barry",
    age: 24,
    powers: ['Super velocidad', 'Viajar en el tiempo'],
    getName: function (): string {
      throw new Error("Function not implemented.");
    }
  }

  flash = {
    name: 'Clark Kent',
    age: 60,
    powers: ['Super fuerza'],
    getName() {
      return this.name;
    }
  }
  
  console.log(flash.getName())
})()
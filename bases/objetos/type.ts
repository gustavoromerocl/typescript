(() => {

  type Hero = {
    name: string, 
    age: number, 
    powers: number[], 
    getName?: () => string 
  }

  let flash: Hero = {
    name: "Barry",
    age: 24,
    powers: [1, 2],
    getName: function (): string {
      throw new Error("Function not implemented.");
    }
  }

  let superman: Hero = {
    name: "Clark Kent",
    age: 24,
    powers: [1],
    getName: function (): string {
      throw new Error("Function not implemented.");
    }
  }

})()
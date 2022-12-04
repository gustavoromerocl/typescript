(() => {

  type Hero = {
    name: string, 
    age: number, 
    powers: number[], 
    getName?: () => string 
  }

  let myCustomVariable: (string | number | Hero) = 'Fernando';
  console.log('myCustomVariable', typeof myCustomVariable);

  myCustomVariable = 20;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: "Barry",
    age: 24,
    powers: [1, 2],
    getName: function (): string {
      throw new Error("Function not implemented.");
    }
  };
  //Lo tipos de ocjetos definidos con la palabra reservada type en TS no son traducidos a js ya que solo existe en TS
  console.log(typeof myCustomVariable);

})()
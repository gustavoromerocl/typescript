(() => {
  const error = (message:string):never => {
    throw new Error(message)
  };

  error('Auxilio!');

  //Este console log no se va a ejecutar
  console.log('Hola mundo');
})()
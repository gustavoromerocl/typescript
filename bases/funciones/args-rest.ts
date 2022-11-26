(() => {
  const fullName = ( firstName: string, ...rest: string[]): string => {
    return `${firstName} ${ rest.join(' ')}`;
  };

  const superman = fullName('Clark','Joshep','Kent');

  console.log('superman', superman)
})()
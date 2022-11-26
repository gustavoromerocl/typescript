(() => {
  const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
    
    if(!upper) return `${firstName} ${lastName || 'not lastname'}`;
    
    return `${firstName} ${lastName || 'not lastname'}`.toUpperCase();
  }

  const name = fullName('Tony', 'Stark', true);
  console.log('name', name)
})()
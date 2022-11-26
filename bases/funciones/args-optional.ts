(() => {
  const fullName = (firstName: string, lastName?: string ): string => {
    return `${firstName}${lastName || 'not lastname'}`;
  }

  const name = fullName('Tony');
  console.log('name', name)
})()
import { printObject, genericFunction, genericFunctionArrow,  } from '../generics/generics';
import { getPokemon } from '../generics/get-pokemon';
import { Villain, Hero } from '../interfaces';

// import { Hero } from './interfaces/hero';
// import { Villain } from './interfaces/villain';


// printObject( 123 );
// printObject( new Date() );
// printObject( { a:1, b:2, c:3 } );
// printObject( [1,2,3,4,5,6,7,8,9,10] );
// printObject( 'Hola Mundo' );
// const name: string = 'Fernando';

// console.log(  genericFunctionArrow( 3.141618 ).toFixed(2)   )
// console.log(  genericFunctionArrow( name ).toUpperCase()   )
// console.log(  genericFunctionArrow( new Date() ).getDate()   )

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

getPokemon(1)
  .then( pokemon => console.log( pokemon ) )
  .catch( error => console.error( error ) )
  .finally( () => console.log('Fin de getPokemon')  )


// console.log( genericFunctionArrow<Villain>(deadpool).dangerLevel  )

import { Pokemon } from "./decorators/pokemon-class";


(Pokemon.prototype as any).customName = 'Pikachu'

const charmander = new Pokemon('Charmander');

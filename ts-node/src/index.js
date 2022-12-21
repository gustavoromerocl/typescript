define(["require", "exports", "./classes/Hero"], function (require, exports, Hero_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import powers, { Power } from './data/powers';
    // import { Hero as SuperHero, Hero2 } from './classes/Hero';
    // import * as HeroClasses from './classes/Hero';
    console.log('Hola Mundo!¡¡¡');
    // const ironman = new SuperHero('Ironman', 1, 55);
    const ironman = new Hero_1.Hero('Ironman', 1, 55);
    console.log(ironman);
    console.log(ironman.power);
});

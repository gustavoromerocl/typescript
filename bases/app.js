"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var SuperheroStrength;
    (function (SuperheroStrength) {
        SuperheroStrength[SuperheroStrength["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        SuperheroStrength[SuperheroStrength["fuerzaBatman"] = 1] = "fuerzaBatman";
        SuperheroStrength[SuperheroStrength["fuerzaFlash"] = 5] = "fuerzaFlash";
        SuperheroStrength[SuperheroStrength["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(SuperheroStrength || (SuperheroStrength = {}));
    var fuerzaFlash = SuperheroStrength.fuerzaFlash;
    var fuerzaSuperman = SuperheroStrength.fuerzaSuperman;
    var fuerzaBatman = SuperheroStrength.fuerzaBatman;
    var fuerzaAcuaman = SuperheroStrength.fuerzaAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map
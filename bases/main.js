"use strict";
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
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
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (!upper)
            return "".concat(firstName, " ").concat(lastName || 'not lastname');
        return "".concat(firstName, " ").concat(lastName || 'not lastname').toUpperCase();
    };
    var name = fullName('Tony', 'Stark', true);
    console.log('name', name);
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName).concat(lastName || 'not lastname');
    };
    var name = fullName('Tony');
    console.log('name', name);
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName).concat(lastName);
    };
    var noName;
    var name = fullName('Tony', 'Stark');
    console.log('name', name);
})();
(function () {
    var fullName = function (firstName) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(rest.join(' '));
    };
    var superman = fullName('Clark', 'Joshep', 'Kent');
    console.log('superman', superman);
})();
(function () {
    var addNumber = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo esta salvado"; };
    var myFunction;
    myFunction = addNumber;
    console.log(myFunction(1, 2));
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activateBatisignal = function () {
        return 'Batiseñal activada!';
    };
    console.log(typeof activateBatisignal);
    var heroName = returnName();
})();
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
var mystique;
mystique = charles;
mystique = apocalipsis;
(function () {
    var flash = {
        name: "Barry",
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getName: function () {
            throw new Error("Function not implemented.");
        }
    };
    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super fuerza'],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash.getName());
})();
(function () {
    var flash = {
        name: "Barry",
        age: 24,
        powers: [1, 2],
        getName: function () {
            throw new Error("Function not implemented.");
        }
    };
    var superman = {
        name: "Clark Kent",
        age: 24,
        powers: [1],
        getName: function () {
            throw new Error("Function not implemented.");
        }
    };
})();
(function () {
    var myCustomVariable = 'Fernando';
    console.log('myCustomVariable', typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Barry",
        age: 24,
        powers: [1, 2],
        getName: function () {
            throw new Error("Function not implemented.");
        }
    };
    console.log(typeof myCustomVariable);
})();
(function () {
    var avenger = 123;
    var power;
    avenger = "Dr Strange";
    console.log(avenger.charAt(0));
    avenger = 150.23256415;
    console.log(avenger.toFixed(2));
    console.log(power);
})();
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
var llamarBatman = function (llamar) {
    if (llamar === void 0) { llamar = true; }
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
var unirheroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
};
var noHaceNada = function (numero, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var villians = ["Omega Rojo", "Dormammu", "Duende verde"];
    villians.forEach(function (v) { return console.log(v.toUpperCase); });
    console.log(numbers);
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log(isSuperman);
    console.log({ isBatman: isBatman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.medium;
    console.log(currentAudio);
})();
(function () {
    var error = function (message) {
        throw new Error(message);
    };
    error('Auxilio!');
    console.log('Hola mundo');
})();
(function () {
    var nada = undefined;
    var isActive = undefined;
    console.log(nada);
    console.log(isActive);
});
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avengers = Number('55A');
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var batman = "Batman";
    var linternaVerde = "Linterna verde";
    var volcanNegro = "H\u00E9roe: Volcan negro";
    console.log(batman.toUpperCase());
    console.log("I'm ".concat(batman));
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No está presente");
})();
(function () {
    var hero = ['Dr Strange', 100, true];
    hero[0] = 'Iroman';
    hero[1] = 50;
    hero[2] = false;
})();
(function () {
    function callBatman() {
    }
    var callSuperan = function () {
    };
    var a = callBatman();
    console.log('a', a);
});
//# sourceMappingURL=main.js.map
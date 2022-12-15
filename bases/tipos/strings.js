"use strict";
(function () {
    var _a;
    var batman = "Batman";
    var linternaVerde = "Linterna verde";
    var volcanNegro = "H\u00E9roe: Volcan negro";
    console.log(batman.toUpperCase());
    console.log("I'm ".concat(batman));
    // ? : Valida que el elemento tenga un valor asignado, de lo contrario no ejecuta lo siguiente
    // Al pasarle el operador or se valida como una expresión thruty/falsy, por lo que podemos generar una opoeración con su resultado
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No está presente");
})();
//# sourceMappingURL=strings.js.map
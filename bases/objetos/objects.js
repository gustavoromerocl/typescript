"use strict";
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

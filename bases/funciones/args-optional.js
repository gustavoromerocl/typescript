"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName).concat(lastName || 'not lastname');
    };
    var name = fullName('Tony');
    console.log('name', name);
})();

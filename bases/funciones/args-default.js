"use strict";
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

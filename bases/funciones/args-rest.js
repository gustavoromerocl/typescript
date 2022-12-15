"use strict";
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
//# sourceMappingURL=args-rest.js.map
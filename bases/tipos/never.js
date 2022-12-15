"use strict";
(function () {
    var error = function (message) {
        throw new Error(message);
    };
    error('Auxilio!');
    //Este console log no se va a ejecutar
    console.log('Hola mundo');
})();
//# sourceMappingURL=never.js.map
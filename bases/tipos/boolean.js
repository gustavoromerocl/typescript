"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    //isSuperman = true && false;
    //isSuperman = (isBatman) ? 'ABC' : 'XYZ';
    isSuperman = (isBatman) ? true : false; //no usar comillas 'false' or 'true' 
    console.log(isSuperman);
    console.log({ isBatman });
})();

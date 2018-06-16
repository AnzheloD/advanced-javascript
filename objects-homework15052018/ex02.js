'use strict';

const Car = (function(){
    let brand;
    let model;

    function show(){
        console.log(`${brand} ${model}`);
    }

    function enterCar(br,mod){
        brand = br;
        model  = mod;

        this.print= show;
        this.addedCar = function(){
            return brand !== undefined && model !== undefined;
        }
    }

    return enterCar;

})();

let audi = new Car('Audi', 'A6');
audi.print();

let fiat = new Car ('Fiat', 'Brava');
fiat.print();

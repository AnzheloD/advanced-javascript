"use strict";

function Car(mark = '', carModel = '', year = ''){
    let marka = mark;
    let model = carModel;
    let godina = year;

    if (typeof marka !== 'string' && typeof model !== 'string'){
        throw Error ('Please check you answer');
    }

    this.isGood = function(){
        return true;
    }
    this.print = function(){
        console.log(`${marka} ${model} ${godina}`);
    }
}

Object.defineProperties(Car,{
    maxSpeed:{
    value: 200,
    writable:true,
    configurable:false
    },
    owner:{
    value: 'Ivan',
    writable:false,
    configurable:false
    }

});

console.log(Car.maxSpeed);
console.log(Car.owner);

let toyota = new Car('Toyota', 'Rav4');
toyota.print();
if (toyota.isGood()){
    console.log("Toyota is a good car");
};

let seat = new Car('Seat', 'Leon', 2007);
seat.print();
if (seat.isGood()){
    console.log("Seat is a good car");
};
seat.maxSpeed = 230;
console.log(`Seat max speed ${seat.maxSpeed}`);

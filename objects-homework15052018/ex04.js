'use strict';
let arr = [35,52,100,23,40,32,21,64,120];

Array.prototype.findMin = function(){
    
    let min = this[0];
    for(let index = 0;index<=this.length;index++){
        if (this[index]<min){
            min = this[index];
        }
    }
    return min;
}

console.log('min', arr.findMin());
let values = [4.5, 1.5, 7.8, 2.9];
console.log('min', values.findMin());


Array.prototype.findMax = function(){

    let max = this[0];
    this.forEach(function(value,index){ 
        if (value>max){
            max = value;
        }
    });
    return max
}

console.log('max', arr.findMax());
let valuesArr = [4.5, 1.5, 7.8, 2.9];
console.log('max', values.findMax());

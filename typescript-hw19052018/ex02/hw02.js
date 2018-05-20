var Queue = /** @class */ (function () {
    function Queue() {
        this.elements = [];
    }
    Queue.prototype.put = function (el) {
        this.elements.push(el);
    };
    Queue.prototype.get = function () {
        return this.elements.shift();
    };
    Queue.prototype.remove = function (el) {
        var result = [];
        for (var index = 0; index < this.elements.length; index++) {
            if (result.indexOf(this.elements[index]) == -1) {
                result.push(this.elements[index]);
            }
        }
        return result;
    };
    return Queue;
}());
var character = new Queue();
character.put('Aragorn');
character.put('Legolas');
character.put('Borimir');
character.put('Frodo');
character.put('Aragorn');
character.put('Frodo');
character.put('Legolas');
character.put('Bilbo');
character.put('Frodo');
character.put('Legolas');
console.log(character);
console.log(character.get() + ", " + character.get() + ", " + character.get());
console.log(character.remove(character));

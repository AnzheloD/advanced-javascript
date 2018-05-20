"use strict";
exports.__esModule = true;
var Weapon = /** @class */ (function () {
    function Weapon(name, power) {
        this._name = name;
        this._power = power;
    }
    Object.defineProperty(Weapon.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "power", {
        get: function () {
            return this._power;
        },
        set: function (power) {
            this._power = power;
        },
        enumerable: true,
        configurable: true
    });
    Weapon.prototype.showWeapon = function () {
        console.log("Name: " + this.name + " Power: " + this.power);
    };
    return Weapon;
}());
exports.Weapon = Weapon;

"use strict";
exports.__esModule = true;
var barbarian_1 = require("./barbarian");
var weapon_1 = require("./weapon");
var hero = new barbarian_1.Barbarian(100, "Дрипи", "Прокъсани");
hero.show();
hero.fight();
var sword = new weapon_1.Weapon('Long Sword', 200);
sword.showWeapon();

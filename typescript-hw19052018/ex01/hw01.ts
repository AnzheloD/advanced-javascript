import {actions} from './actions';
import {Barbarian} from './barbarian';
import {Weapon} from './weapon';

let hero:Barbarian = new Barbarian(100, "Дрипи", "Прокъсани");

hero.show();
hero.fight();

let sword:Weapon = new Weapon('Long Sword', 200);
sword.showWeapon();


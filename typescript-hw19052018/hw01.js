var Barbarian = /** @class */ (function () {
    function Barbarian(hp, plateArm, pant) {
        this.damage = hp;
        this.plateArmor = plateArm;
        this.pants = pant;
    }
    Barbarian.prototype.show = function () {
        console.log("HP: " + this.damage + " Attributes: " + this.plateArmor + " " + this.pants);
    };
    Barbarian.prototype.fight = function () {
        var criticalHit = Math.floor(Math.random() * 50);
        var foundApotion = Math.floor(Math.random() * 50);
        var hit = Math.floor(Math.random() * 10);
        if ((Math.random()) < 0.5) {
            while (this.damage > 0) {
                if (hit > 5) {
                    if (this.damage > 0) {
                        this.damage -= hit;
                        console.log("The player has been hit -" + hit + " hit");
                        console.log("Player HP: " + this.damage);
                    }
                    else {
                        this.damage = 0;
                    }
                }
                if (Math.random() * 10 > 8) {
                    this.damage -= criticalHit;
                    console.log("The player has been hit critically -" + criticalHit + " HP");
                    console.log("Player HP: " + this.damage);
                }
                if (Math.random() * 10 < 3) {
                    this.damage += foundApotion;
                    console.log("The player have found the potion +" + foundApotion + " HP");
                    console.log("Player HP: " + this.damage);
                }
                if (this.damage == 0) {
                    console.log("The player is dead");
                }
            }
        }
    };
    return Barbarian;
}());
var hero = new Barbarian(100, "Дрипи", "Прокъсани");
hero.show();
hero.fight();

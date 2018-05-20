class Barbarian{
    private damage: number;
    plateArmor:string;
    pants: string;
    

    constructor (hp: number, plateArm: string, pant: string){
        this.damage = hp;
        this.plateArmor = plateArm;
        this.pants = pant;
    }

    show():any{
        console.log(`HP: ${this.damage} Attributes: ${this.plateArmor} ${this.pants}`);
    }

    fight():void{
    let criticalHit:number = Math.floor(Math.random()*50);
    let foundApotion:number = Math.floor(Math.random()*50);
    let hit:number = Math.floor(Math.random()*10);
        if((Math.random()) < 0.5){
            while(this.damage > 0){
                if(hit > 5){
                    if(this.damage > 0){
                        this.damage -= hit;
                        console.log("The player has been hit -"+hit+" hit");
                        console.log("Player HP: " + this.damage);
                    }else{
                        this.damage = 0;
                    }
                }
                if(Math.random()*10 > 8){
                    this.damage -= criticalHit;
                    console.log("The player has been hit critically -"+criticalHit+" HP");
                    console.log("Player HP: " + this.damage);
                }
                if(Math.random()*10 < 4){
                    this.damage += foundApotion;
                    console.log("The player have found the potion +" + foundApotion + " HP");
                    console.log("Player HP: " + this.damage);
                }
                if (this.damage == 0) {
                    console.log("The player is dead");
                }
            }
        }
    }
}

let hero:Barbarian = new Barbarian(100, "Дрипи", "Прокъсани");
hero.show();
hero.fight();

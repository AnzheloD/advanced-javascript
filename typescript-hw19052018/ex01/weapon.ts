 export class Weapon{
    private _name:string;
    private _power:number;

    constructor(name:string, power:number){
        this._name = name;
        this._power = power;
    }

    set name(name:string){
        this._name = name;
    }
    set power(power:number){
        this._power = power;
    }
    get name():string{
        return this._name;
    }
    get power():number{
        return this._power;
    }
    showWeapon():any{
        console.log(`Name: ${this.name} Power: ${this.power}`);
    }
}
interface Container<T>{
	put( el:T):void; 
	get():T;
	remove(el:T);
}

class Queue<T> implements Container<T>{
    private elements:T[];

    constructor(){
        this.elements = [];
    }

    put( el:T):void{
        this.elements.push(el);
    }

    get():T{
        return this.elements.shift();
    }
    remove(el:T){
        let result =[];
        
        for(let index = 0; index < this.elements.length; index++){
            if (result.indexOf(this.elements[index]) == -1){
                result.push(this.elements[index])
            }
        }
        return result;
    }
}

const character = new Queue();
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
console.log(`${character.get()}, ${character.get()}, ${character.get()}`);
console.log(character.remove(character));


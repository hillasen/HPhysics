export class Object {
    constructor(type, id){
        this.type = type;
        this.id = id;
        this.mass = 1;
    }
    
    setMass(mass){
        this.mass = Number(mass);
    }
};
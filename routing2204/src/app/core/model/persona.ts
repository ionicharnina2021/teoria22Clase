export class Persona{
    public get age(): number|undefined {
        return this._age;
    }
    public set age(value: number|undefined) {
        this._age = value;
    }
    public get $name(): string|undefined {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    constructor(public _name?: string,private _age?: number){

    }
    public toString():string{
        return this.$name+" "+this.age;
    }
}
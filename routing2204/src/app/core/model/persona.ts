export class Persona{
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    constructor(private _name: string,private _age: number){

    }
    public toString():string{
        return this.name+" "+this.age;
    }
}
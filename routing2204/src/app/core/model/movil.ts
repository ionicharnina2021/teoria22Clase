export class Movil{
    public get specs(): string {
        return this._specs;
    }
    public set specs(value: string) {
        this._specs = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    constructor(private _name: string,private _specs: string){
        }

}
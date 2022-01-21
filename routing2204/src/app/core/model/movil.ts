export class Movil{
    public get production(): boolean {
        return this._production;
    }
    public set production(value: boolean) {
        this._production = value;
    }
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
    constructor(private _name: string,private _specs: string,private _production: boolean){
        }

}
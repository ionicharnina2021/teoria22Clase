export class Persona{
    constructor(private _nombre:string, private _edad:number){  
    }
    public get nombre(){
        return this._nombre;
    }

    public set nombre(apelativo:string){
        console.log("estoy dentro del set");
        this._nombre=apelativo;
    }

    public get edad(){
        return this._edad;
    }
    public toString():string{
        return this.nombre+" "+this.edad;
    }
    public equals(other:Persona):boolean{
        return this._nombre===other.nombre&&this._edad==other.edad;
    }
}
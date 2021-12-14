import { Persona } from "./persona";

export class PersonaMother{
    private static nombres:string[]=["Ernesto","juan","luis"];
    private static edad:number[]=[12,21,22];

    public static generatePersons():Persona[]{
        let personas:Persona[]=[];
        for (let index = 0; index < this.nombres.length; index++) {
            personas.push(new Persona(this.nombres[index],this.edad[index]))           
        }
        console.log(personas[0].nombre);
        personas[0].nombre="Rosaura"
        console.log(personas[0].nombre);
        return personas;
    }
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  lista:string[]=["saluda"];
  constructor() { }

  insertar(){
    console.log("insertando en el servicio")
    this.lista.push("hola");
  }
}

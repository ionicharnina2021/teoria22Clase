
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  lista:string[]=["saluda"];
  lista$!:Subject<string[]>;
  constructor() {
    this.lista$=new Subject();
    setTimeout(()=> this.lista$.next(this.lista),10);
   }

  insertar(){
    console.log("insertando en el servicio")
    this.lista.push("hola");
    this.lista$.next(this.lista);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public banana="por defecto";
  public fecha: Date | undefined;
  public pista='escribe un dato X';
  public boton="funcion";
  constructor(){
    console.log("creando el constructor")
  }
  ngOnInit(): void {
    console.log("creando el oninit")
    this.fecha = new Date(Date.now());
  }
  public change(cadena:string){
    this.pista=cadena;
  }
}

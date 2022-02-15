import { ArticleValidator } from './../../model/articleValidator';
import { InputForm } from './../../model/inputForm';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-formulario-no-reactivo',
  templateUrl: './formulario-no-reactivo.component.html',
  styleUrls: ['./formulario-no-reactivo.component.css']
})
export class FormularioNoReactivoComponent implements OnInit {
  // public nombre!:string;
  // public precio!:number;
  // public existencias!:number;
  // public validnombre=false;
  // public validprecio=true;
  // public validexistencias=true;
  // public messageNombre="nombre no valido";
  // public messagePrecio="precio no valido";
  // public messageExistencias="existencias no validas";
  public article!:Article;
  public validators!:ArticleValidator;
  constructor() { 
    this.article={nombre:"",precio:0,existencias:0};
    this.validators=new ArticleValidator(this.article);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    // if(this.validate())
    //   console.log(this.nombre+" "+this.precio+" "+this.existencias)
  }

  // validate(){
  //   console.log("te voy a validar");
  //   this.validnombre=this.validarNombre();
  //   this.validprecio=this.validarPrecio();
  //   this.validexistencias=this.validarExistencias();
  //   return this.validnombre&&this.validprecio&&this.validarExistencias;
  // }

  // validarNombre(): boolean {
  //   let regexp = new RegExp( '[a..z]');
  //   return regexp.test(this.nombre);
  // }
  // validarPrecio(): boolean {
  //   return this.precio>0
  // }
  // validarExistencias(): boolean {
  //   return this.existencias>0
  // }
}

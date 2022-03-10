import { Persona } from './../../core/model/persona';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasar-objeto',
  templateUrl: './pasar-objeto.component.html',
  styleUrls: ['./pasar-objeto.component.css']
})
export class PasarObjetoComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  public persona!: Persona;
  ngOnInit(): void {
    // Hay que hacer un JSON.parse porque se envia desde el remitente con un JSON.stringify
    // aun así, se convierte en object. Para convertirlo en tipo Persona hay que usar asssign
    // y por lo tanto es necesario tener un constructor vacio en el tipo (usamos ? en las propiedades)
    this.persona=Object.assign(new Persona(),JSON.parse(this.route.snapshot.queryParams['person']))
    // this.persona=<Persona>JSON.parse(this.route.snapshot.queryParams['person']);
    console.log(this.persona.$name)
  }

}

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
    this.persona=this.route.snapshot.queryParams['person'];
  }

}

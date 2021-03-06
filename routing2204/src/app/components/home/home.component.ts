import { ValorService } from './../../services/valor.service';
import { MovilService } from './../../services/movil.service';
import { Persona } from './../../core/model/persona';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  marca!: string;
  constructor(
    private route: Router,
    private movilService: MovilService,
    private valorService: ValorService
  ) {}

  ngOnInit(): void {}

  gotoCodingRoute() {
    this.route.navigate(['routerpro']);
  }
  gotoQueryComponent() {
    let per=new Persona('Juan Luis', 31);
    this.route.navigate(['queryParams'], {
      queryParams: { person: JSON.stringify(per) },
    });
  }
  cargaMoviles() {
    this.route.navigate(['moviles'], {
      queryParams: {
        marca: this.marca,
      },
    });
  }

  public valor=0;
  public incrementValue() {
    this.valorService.incValue();
    this.valor=this.valorService.valor;
  }
 
}

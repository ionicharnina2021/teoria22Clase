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
  constructor(private route: Router, private movilService: MovilService) {}

  ngOnInit(): void {}

  gotoCodingRoute() {
    this.route.navigate(['routerpro']);
  }
  gotoQueryComponent() {
    this.route.navigate(['queryParams'], {
      queryParams: { person: new Persona('Juan Luis', 31) },
    });
  }
  cargaMoviles() {
    this.route.navigate(['moviles'], {
      queryParams: {
        marca: this.marca,
      },
    });
  }
}

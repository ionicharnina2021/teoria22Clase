import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pasar-valor',
  templateUrl: './pasar-valor.component.html',
  styleUrls: ['./pasar-valor.component.css']
})
export class PasarValorComponent implements OnInit {

  valor=0;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.valor=this.route.snapshot.params['valor'];
  }

}

import { Component, OnInit } from '@angular/core';
import { ValorService } from 'src/app/services/valor.service';

@Component({
  selector: 'app-router-programatico',
  templateUrl: './router-programatico.component.html',
  styleUrls: ['./router-programatico.component.css']
})
export class RouterProgramaticoComponent implements OnInit {
  public valor=0;
  constructor( private valorService: ValorService) {
   
   }

  ngOnInit(): void {
    this.valor=this.valorService.valor;
  }

}

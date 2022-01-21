import { MovilService } from './../../services/movil.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Movil } from 'src/app/core/model/movil';

@Component({
  selector: 'app-moviles',
  templateUrl: './moviles.component.html',
  styleUrls: ['./moviles.component.css']
})
export class MovilesComponent implements OnInit {

  constructor(private route:ActivatedRoute,private movilesService:MovilService) { }
  movil_seleccionado!: Movil;
  marca!:string;
  ngOnInit(): void {
    this.marca=this.route.snapshot.params['marca'];
    console.log(this.getMovils())
    // this.marca=this.route.snapshot.queryParams['marca'];
    // console.log("los moviles son: "+this.movilesService.getByMarca(this.marca) )
  }

  recibeSeleccion(movili:Movil){
    this.movil_seleccionado=movili;
  }
  getMovils(){
    return this.movilesService.getByMarca(this.marca) 
  }
}

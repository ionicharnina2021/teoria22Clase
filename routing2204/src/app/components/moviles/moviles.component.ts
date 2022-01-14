import { MovilService } from './../../services/movil.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviles',
  templateUrl: './moviles.component.html',
  styleUrls: ['./moviles.component.css']
})
export class MovilesComponent implements OnInit {

  constructor(private route:ActivatedRoute,private movilesService:MovilService) { }

  marca!:string;
  ngOnInit(): void {
    this.marca=this.route.snapshot.params['marca'];
    console.log(this.getMovils())
    // this.marca=this.route.snapshot.queryParams['marca'];
    // console.log("los moviles son: "+this.movilesService.getByMarca(this.marca) )
  }

  getMovils(){
    return this.movilesService.getByMarca(this.marca) 
  }
}

import { PersonalService } from './../../services/personal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  lista!:string[];
  constructor(private personalService:PersonalService) { }

  ngOnInit(): void {
    this.lista=this.personalService.lista;
  }

}

import { PersonalService } from './../../services/personal.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  lista$!:Observable<string[]>
  constructor(private personalService:PersonalService) { }

  ngOnInit(): void {
   this.lista$=this.personalService.lista$.asObservable();
  }

}

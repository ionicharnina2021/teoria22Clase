import { Component, OnInit } from '@angular/core';
import { Persona } from '../core/model/persona';
import { PersonaMother } from '../core/model/personaMother';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  private _personas:Persona[];
  constructor() { 
    this._personas=PersonaMother.generatePersons();
  }

  public lastPerson():string{
    return this._personas[this._personas.length-1].toString();
  }
  ngOnInit(): void {
  }

}

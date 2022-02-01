import { CalculadoraService } from './calculadora.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsacalculadoraService {

  constructor(private calculadora:CalculadoraService) { }

  public dime():string{
    return this.calculadora.dimeAlgo();
  }
}

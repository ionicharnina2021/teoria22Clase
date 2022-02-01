import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraMockService {
  constructor() {}
  
  dimeAlgo() {
    return 'mensaje simulado';
  }
}

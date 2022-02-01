import { CalculadoraMockService } from './../mocks/calculadora.mock.service';
import { CalculadoraService } from './calculadora.service';
import { TestBed } from '@angular/core/testing';

import { UsacalculadoraService } from './usacalculadora.service';

describe('UsacalculadoraService', () => {
  let service: UsacalculadoraService;

  beforeEach(() => {
    //cambiando la configuracion del modulo app.module por esta
    TestBed.configureTestingModule({
      providers:[{provide:CalculadoraService,useClass: CalculadoraMockService}]
    });
    service = TestBed.inject(UsacalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('me habla ',()=>{
    expect(service.dime()).toEqual("mensaje simulado");
  })
});

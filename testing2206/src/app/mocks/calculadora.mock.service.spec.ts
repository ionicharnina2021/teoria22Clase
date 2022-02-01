import { TestBed } from '@angular/core/testing';

import { CalculadoraMockService } from './calculadora.mock.service';

describe('Calculadora.MockService', () => {
  let service: CalculadoraMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

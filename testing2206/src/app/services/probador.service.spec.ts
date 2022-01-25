import { TestBed } from '@angular/core/testing';

import { ProbadorService } from './probador.service';

describe('ProbadorService', () => {
  let service: ProbadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProbadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe("comprobador trues",()=>{
    it("probar con true y false",()=>{
      // expect(service.compruebaTrue(true)).toBeTrue()
      expect(service.compruebaTrue(false)).toBeFalse()
    })
  })
  describe("comprobador pares",()=>{
    it("con un numero par",()=>{
      expect(service.compruebaPar(2)).toBeTrue();
    })
    it("con un numero impar",()=>{
      expect(service.compruebaPar(3)).toBeFalse();
    })
  })
});

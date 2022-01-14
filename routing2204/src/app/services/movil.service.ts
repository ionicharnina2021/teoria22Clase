import { Movil } from './../core/model/movil';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovilService {
  private _moviles = Array.of(
    new Movil('MI 9', 'depende del dia'),
    new Movil('Huawei c20', 'que yo que se'),
    new Movil('Huawei p10', 'me ha salido muy bueno'),
    new Movil('Redmi note 8', 'es barato')
  );
  constructor() {
    console.log('creando el servicio de moviles');
  }

  public getByMarca(marca:string):Array<Movil>{
    return this._moviles.filter((movil)=>{
      return movil.name.startsWith(marca)
    })
  }
}

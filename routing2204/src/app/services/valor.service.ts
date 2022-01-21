import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValorService {
  public incValue() {
    this._valor++;
  }
  private _valor = 0;

  public get valor(): number {
    return this._valor;
  }
  public set valor(value: number) {
    this._valor = value;
  }

  constructor() {}
}

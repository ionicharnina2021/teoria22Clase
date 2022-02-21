import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { MyFormControl } from '../model/myformcontrol';
import { MyFormGroup } from '../model/myFormGroup';

@Injectable({
  providedIn: 'root',
})
export class CustomreactiveService {
  private _myFormGroup!: MyFormGroup;
  public get myFormGroup(): MyFormGroup {
    return this._myFormGroup;
  }
  public set myFormGroup(value: MyFormGroup) {
    this._myFormGroup = value;
  }
  private nombreCampos = ['nombre', 'apellidos', 'otro', 'otro'];
  public nombreControles = ['miControl', 'compuesto', 'regular', 'regularDos'];
  regex = '';
  private controles = [
    new MyFormControl('', [
      Validators.minLength(3),
      Validators.pattern('[0..9]'),
    ]),
    new MyFormControl(
      '',
      Validators.compose([Validators.required, Validators.maxLength(3)])
    ),
    new MyFormControl('', Validators.pattern(this.regex)),
    new MyFormControl('', Validators.pattern('hola[ao]')),
  ];
  constructor() {
    this._myFormGroup = new MyFormGroup(
      this.nombreCampos,
      this.nombreControles,
      this.controles
    );
    this._myFormGroup.insertarValidationMessages(
      'miControl',
      ['minlength', 'pattern'],
      ['No se si funcionara', 'solo numericos']
    );
  }
  validateControl(element: string): boolean {
    let resultado =
      this._myFormGroup.getControl(element).dirty &&
      !this._myFormGroup.getControl(element).valid;
    return resultado;
  }
  
  public getErrorMessage(control: string) {
    let algo=this._myFormGroup.getControl(control)
    return algo.getValidationMessages();
  }
}

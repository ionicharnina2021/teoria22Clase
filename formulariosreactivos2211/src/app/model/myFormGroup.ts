import { FormGroup } from '@angular/forms';
import { MyFormControl } from './myformcontrol';

export class MyFormGroup {
  private _formGroup!: FormGroup;
  public get formGroup(): FormGroup {
    return this._formGroup;
  }
  public set formGroup(value: FormGroup) {
    this._formGroup = value;
  }

  constructor(
    private nameFields: string[],
    private nameControl: string[],
    private formControls: MyFormControl[]
  ) {
    this.formGroup = new FormGroup({});
    for (let index = 0; index < nameFields.length; index++) {
      this.formGroup.addControl(nameControl[index], formControls[index]);
    }
  }

  public getControl(key: string): MyFormControl {
    let retorno = this.formGroup.get(key);
    return <MyFormControl>retorno;
  }

  public insertarValidationMessages(
    nameControl: string,
    errors: string[],
    messages: string[]
  ) {
    let control = this.getControl(nameControl);
    for (let index = 0; index < errors.length; index++) {
      control.insertValidationMessage(errors[index], messages[index]);
    }
  }
  public getErrorMessage(key: string, position: number): string {
    let respuesta = this.getControl(key);
    return respuesta.errors![position];
  }

}

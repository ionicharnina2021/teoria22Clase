import { AComponent } from './a/a.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AAComponent } from './aa/aa.component';
import { AAAComponent } from './aaa/aaa.component';



@NgModule({
  declarations: [AAComponent,AComponent, AAAComponent],
  exports:[AAComponent,AComponent],
  imports: [
    CommonModule
  ]
})
export class AmodModule { }

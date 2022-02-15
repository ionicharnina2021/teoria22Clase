import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioNoReactivoComponent } from './components/formulario-no-reactivo/formulario-no-reactivo.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioNoReactivoComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

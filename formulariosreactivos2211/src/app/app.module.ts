import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveTeoriaComponent } from './components/reactive-teoria/reactive-teoria.component';
import { ReactiveCustom02Component } from './components/reactive-custom02/reactive-custom02.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveTeoriaComponent,
    ReactiveCustom02Component
  ],
  imports: [
    BrowserModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

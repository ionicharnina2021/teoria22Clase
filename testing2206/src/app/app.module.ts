import { CalculadoraService } from './services/calculadora.service';
import { UsacalculadoraService } from './services/usacalculadora.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CalculadoraService],
  bootstrap: [AppComponent]
})
export class AppModule { }

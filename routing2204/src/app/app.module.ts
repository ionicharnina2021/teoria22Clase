import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UnoComponent } from './components/uno/uno.component';
import { RouterProgramaticoComponent } from './components/router-programatico/router-programatico.component';
import { PasarValorComponent } from './components/pasar-valor/pasar-valor.component';
import { PasandoDosComponent } from './components/pasando-dos/pasando-dos.component';
import { PasarObjetoComponent } from './components/pasar-objeto/pasar-objeto.component';
import { MovilesComponent } from './components/moviles/moviles.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnoComponent,
    RouterProgramaticoComponent,
    PasarValorComponent,
    PasandoDosComponent,
    PasarObjetoComponent,
    MovilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

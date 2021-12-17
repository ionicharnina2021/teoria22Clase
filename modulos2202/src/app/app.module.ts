import { AmodModule } from './primer/amod.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BComponent } from './segundo/b/b.component';

@NgModule({
  declarations: [
    AppComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmodModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

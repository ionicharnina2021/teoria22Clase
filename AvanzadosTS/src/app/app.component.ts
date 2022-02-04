import { Component } from '@angular/core';
import { PromisesService } from './servicios/promises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AvanzadosTS';
  constructor(public prom:PromisesService){
    prom.haz();
    prom.hazDos();
  }
}

import { UsacalculadoraService } from './services/usacalculadora.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'base';
  constructor(private calculon: UsacalculadoraService) {}
  public dimelo() {
    return this.calculon.dime();
  }
}

import { Component } from '@angular/core';
import { PersonalService } from './services/personal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive2208';
  constructor(private personalService: PersonalService) {}
  insertar() {
    this.personalService.insertar();
  }
}

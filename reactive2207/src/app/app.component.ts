import { PersonalService } from './services/personal.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reactive2207';
  constructor(private personalService: PersonalService) {}
  insertar() {
    this.personalService.insertar();
  }
}

import { StudentService } from './service/student.service';
import { Component } from '@angular/core';
import { Student } from './interface/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conecting2205';
  lista!: Promise<Student>;
  letrero=false;
  constructor(private studentService:StudentService){
  }
  public getStudents(){
    this.lista=this.studentService.getStudents();
    this.letrero=true;
    this.lista.then((a)=>{
      console.log("estoy en getStudents "+a)
    })
  }
  public visible():boolean{
    return !this.lista&&this.letrero;
  }
}

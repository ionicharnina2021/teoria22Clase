import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/core/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  estudiantes!:any;
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService.getAlgo().then((lists)=>{
      this.estudiantes=lists
    });
    
  }

}

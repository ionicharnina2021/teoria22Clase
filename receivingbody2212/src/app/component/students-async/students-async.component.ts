import { StudentAsyncService } from './../../services/student-async.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students-async',
  templateUrl: './students-async.component.html',
  styleUrls: ['./students-async.component.css']
})
export class StudentsAsyncComponent implements OnInit {
  myStudents$!: Observable<Response>;
  constructor(private studentServiceAsync:StudentAsyncService) { }

  ngOnInit(): void {
    // this.getStudents();

  }
  getStudents(){
    this.myStudents$=this.studentServiceAsync.students$;
  }

}

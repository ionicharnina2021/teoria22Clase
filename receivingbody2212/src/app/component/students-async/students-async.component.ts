import { CustomResponse } from './../../core/model/custom-response';
import { UserAuthenticationService } from './../../services/user-authentication.service';
import { StudentAsyncService } from './../../services/student-async.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students-async',
  templateUrl: './students-async.component.html',
  styleUrls: ['./students-async.component.css']
})
export class StudentsAsyncComponent implements OnInit {
  myStudents$!: Observable<CustomResponse>;
  constructor(private userAuthenticationService:UserAuthenticationService,private studentServiceAsync:StudentAsyncService) {
    userAuthenticationService.authenticate("jose","321");
    
   }

  ngOnInit(): void {
    // this.getStudents();

  }
  getStudents(){
    if(this.userAuthenticationService.accessGranted){
      this.myStudents$=this.studentServiceAsync.students$(this.userAuthenticationService.accessToken);
    }
  }

}

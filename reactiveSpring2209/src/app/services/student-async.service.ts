import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomResponse } from '../core/model/custom-response';
import { Student } from '../core/model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentAsyncService {
  private readonly apiUrl = 'http://localhost:8080';
  students$ =<Observable<CustomResponse>>this.http.get<CustomResponse>(this.apiUrl+"/students/list");
  constructor(protected http: HttpClient) { 
    this.students$.subscribe((algo)=>{
        console.log(algo.status)
    });
  }
  
  
    
}

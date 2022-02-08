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
  constructor(protected http: HttpClient) { }
  
  students$ =<Observable<CustomResponse>>this.http.get<CustomResponse>(this.apiUrl+"/students/list");
    
}

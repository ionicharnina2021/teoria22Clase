import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentAsyncService {
  private readonly apiUrl = 'http://localhost:8080';
  students$ =<Observable<Response>>this.http.get<Response>(this.apiUrl+"/students/list");
  constructor(protected http: HttpClient) { 
   
  }
  
  
    
}

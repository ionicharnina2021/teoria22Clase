import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../core/model/student';
import { CustomResponse } from '../core/model/custom-response';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly apiUrl = 'http://localhost:8080';
  constructor(protected http: HttpClient) { }
  students:any[] = [];

   async getAlgo(){
    await this.http.get<CustomResponse>(this.apiUrl+"/students/list")
    .forEach((studiante)=>{
       this.students=<Student[]>studiante.data.students;
      });
      return this.students
    }
}

import { CustomResponse } from './../interface/custom-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../interface/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private readonly apiUrl = 'http://localhost:8080';
  constructor(protected http: HttpClient) {}

  async getPersonas() {
    let persons;
    await this.http
      .get<CustomResponse>(this.apiUrl + '/personal/personas')
      .forEach((personas) => (persons = personas.data.personas));
  }

  async getStudents() {
    let lista: any;
    console.log('hola aqui empezando el metodo');
    await this.http.get(this.apiUrl + '/students/list').forEach((stud) => {
      // console.log(stud);
      console.log('hola estoy dentro del get');
      lista = stud;
    });
    console.log('hola estoy antes del retorno');
    return lista;
  }
}

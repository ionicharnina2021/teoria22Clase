import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomResponse } from '../core/model/custom-response';

@Injectable({
  providedIn: 'root',
})
export class StudentAsyncService {
  private readonly apiUrl = 'http://localhost:8080';
  constructor(protected http: HttpClient) {}

  public students$(access_token: string): Observable<CustomResponse> {
    let options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer' + ' ' + access_token,
      }),
      withCredentials: true,
    };
    return this.http.get<CustomResponse>(this.apiUrl + '/students/list',options);
  }
}

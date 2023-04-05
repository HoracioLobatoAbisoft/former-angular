import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private ApiUrl = 'https://localhost:7143' + '/api'; // URL to web api

  constructor(private http: HttpClient) {}

  decryptedToken = () => {
    return localStorage.getItem('token');
  };

  public postLogin(data: any): Observable<any> {
    return this.http.post<any>(this.ApiUrl + '/Login', data);
  }

  public getDataArgomenti(): Observable<any> {
    return this.http.get<any>(this.ApiUrl + '/utenti', {
      headers: {
        Authorization: `Bearer ${this.decryptedToken()}`,
      },
    });
  }
}

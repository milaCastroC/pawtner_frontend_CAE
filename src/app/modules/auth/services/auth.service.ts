import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../../../models/auth/login-request';
import { environment } from '../../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  login(credentials: LoginRequest): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, credentials);
  }

}

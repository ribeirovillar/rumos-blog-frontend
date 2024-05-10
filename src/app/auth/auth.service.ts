import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/v1/auth/login`, { email, password })
      .pipe(
        tap((response: any) => { // Explicitly typing the 'response' parameter as any
          localStorage.setItem('token', response.token);
        })
      );
  }
}

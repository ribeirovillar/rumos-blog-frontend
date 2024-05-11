import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { StorageService } from '../shared/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private storageService: StorageService ) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/v1/auth/login`, { email, password })
      .pipe(
        tap((response: any) => {
          this.storageService.setItem('token', response.token);
        })
      );
  }
}

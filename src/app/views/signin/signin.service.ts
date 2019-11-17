import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/shared/app.settings';
import { of, Observable } from 'rxjs';
import { User } from '../../shared/models/user.model';


@Injectable()
export class SigninService {
    private BASE_URL = 'http://localhost:4200';

    constructor(private http: HttpClient) {
       
    }

    getToken(): string {
        return localStorage.getItem('token');
    }

    logIn(email: string, password: string): Observable<any> {
        const url = `${this.BASE_URL}/signin`;
        console.log(url);
        //return this.http.post<User>(url, { email, password });
        return of(this.getUser({ email, password }));

    }

    signUp(email: string, password: string): Observable<User> {
        const url = `${this.BASE_URL}/signup`;
        return this.http.post<User>(url, { email, password });
    }

    getUsers() {
        return this.http.get<any>(AppSettings.API_ENDPOINT_USERS).toPromise();
  }

    logout() {
        return of(true);
    }

    async getUser({ email, password }): Promise<any> {
       const users = await this.getUsers();
      
        //console.log(login('Unloggued', AuthActions.loginSuccess));
    // Mock response from backend:
        
    return users.find(
      (user: any) => user.email === email && user.password === password
    );
      
  }
  }

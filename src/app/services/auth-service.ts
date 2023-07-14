// Auth Service with JWT Token  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient, private router: Router) { }
    login(email: string, password: string) {
        return this.http.post<any>('http://localhost:3000/login', { email, password })
            .pipe(tap(res => {
                localStorage.setItem('token', res.token);
            }),
                catchError(this.handleError)
            );
    }
    signup(fullname: string, email: string, password: string) {
        return this.http.post<any>('http://localhost:3000/register', { fullname, email, password })
            .pipe(tap(res => {
                
            }),
                catchError(this.handleError)
            );
    }
    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
    get isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
    private handleError(error: any | null) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }
}
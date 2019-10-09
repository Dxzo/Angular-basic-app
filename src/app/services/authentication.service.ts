import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const ROOT = "http://localhost:3000/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  AuthCredentials(username: string, password: string, callback: Function) {
    return this.http.post(ROOT, { username, password }).subscribe(
      (value) => callback(value), 
      (err) => callback(err)
    );
  }

}

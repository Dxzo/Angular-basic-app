import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  AuthCredentials(username: string, password: string, callback: Function) {
    //console.log(userName, password);
    return this.http.post("http://localhost:3000/auth", {
      username, password
    }).subscribe(
      (value) => callback(value), 
      (err) => callback(err)
    );
  }

}

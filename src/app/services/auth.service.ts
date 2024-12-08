import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface IUser {
  "login": string,
  "password": string,
  "role": string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  private urlApi = "http://localhost:8080/auth";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      
  }

  createUser(user: IUser): Observable<any> {
    console.log(user);
    return this.http.post(`${this.urlApi}/register`, user);
  }
}

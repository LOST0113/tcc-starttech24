import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService implements OnInit {
  private urlApi = "http://localhost:8080/categoria";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      
  }

  getCategorias(): Observable<Array<ICategoria>> {
    return this.http.get<Array<ICategoria>>(this.urlApi);
  }
}

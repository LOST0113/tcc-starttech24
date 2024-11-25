import { Injectable, OnInit } from '@angular/core';
import { IProduto } from '../models/produto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService{
  private urlApi = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(`${this.urlApi}/produtos`);
  }
}

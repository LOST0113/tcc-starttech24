import { Injectable } from '@angular/core';
import { IProduto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: Array<IProduto> = [{id: 1, name: "Grifo", image: "images/caneca.jpg", category: "caneca", description: "Night lamp", quantity: 10, price: 200},
    {id: 2, name: "Fone de Ouvidos", image: "images/caneca.jpg", category: "caneca", description: "Night lamp", quantity: 10, price: 100},
    {id: 3, name: "Cadeira", image: "images/caneca.jpg", category: "caneca", description: "Night lamp", quantity: 10, price: 300.2},
    {id: 4, name: "Smartphone", image: "images/caneca.jpg", category: "caneca", description: "Night lamp", quantity: 10, price: 1500},
    {id: 5, name: "Notebook", image: "images/caneca.jpg", category: "caneca", description: "Night lamp", quantity: 10, price: 3250},
    {id: 6, name: "Pc Gamer", image: "images/caneca.jpg", category: "caneca", description: "Night lamp", quantity: 10, price: 5065},
    {id: 7, name: "Tablet", image: "images/caneca.jpg", category: "caneca", description: "Night lamp", quantity: 10, price: 754},
    {id: 8, name: "Mesa gamer", image: "images/caneca.jpg", category: "caneca", description: "Night lamp", quantity: 10, price: 487}
  ];

  constructor() { }

  getProducts(): Array<IProduto> {
    return this.produtos;
  }
}

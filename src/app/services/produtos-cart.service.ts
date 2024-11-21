import { Injectable } from '@angular/core';
import { IProdutoCart } from '../models/produtoCart.model';
import { BehaviorSubject } from 'rxjs';
import { IProduto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosCartService {
  private cartProducts: Array<IProdutoCart> = [
    {id: 10, name: "Shirt", image: "images/caneca.jpg", description: "asa", quantity: 10, price: 1222},
    {id: 11, name: "Shirt", image: "images/caneca.jpg", description: "asa", quantity: 10, price: 1222},
    {id: 12, name: "Shirt", image: "images/caneca.jpg", description: "asa", quantity: 10, price: 1222},
    {id: 13, name: "Shirt", image: "images/caneca.jpg", description: "asa", quantity: 10, price: 1222}
  ];

  private totalItens = new BehaviorSubject<number>(0);

  totalItens$ = this.totalItens.asObservable();

  constructor() { }

  addProduct(product: IProduto) {
    const findProduct = this.cartProducts.find(value => value.id == product.id);
    if(findProduct) {
      findProduct.quantity++
      this.updateTotalItens();
      return;
    }

    const newProduct = {
      id: product.id,
      name: product.name,
      image: product.image,
      description: product.description,
      quantity: 1,
      price: product.price
    }

    this.cartProducts.push(newProduct);
    this.updateTotalItens();
  }

  getCartProducts(): Array<IProdutoCart> {
    return this.cartProducts;
  }

  decreaseQuantity(id: number): void {
    let a = this.cartProducts.find((value) => {
      return value.id == id;
    })

    if(a) {
      a.quantity--;
      if(a.quantity <= 0) {
        this.removeCart(a.id);
      } else {
        this.updateTotalItens();
      }
    }
  }

  addQuantity(id: number): void {
    let a = this.cartProducts.find((value) => {
      return value.id == id;
    })

    if(a) {
      a.quantity++;
    }

    this.updateTotalItens();
  }

  removeCart(id: number): void {
    this.cartProducts = this.cartProducts.filter(value => value.id !== id);

    this.updateTotalItens();
  }

  getTotalPrice() {
    return this.cartProducts.reduce((ac, prod) => {
      return ac + (prod.price * prod.quantity);
    }, 0) 
  }

  getLength(): number {
    return this.cartProducts.length;
  }

  getTotalItens(): number {
    const total = this.cartProducts.reduce((ac, prod) => {
      return ac + prod.quantity
    }, 0);

    return total;
  }

  private updateTotalItens() {
    const total = this.cartProducts.reduce((ac, prod) => {
      return ac + prod.quantity
    }, 0);

    this.totalItens.next(total);
  }
}
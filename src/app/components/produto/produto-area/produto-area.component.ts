import { Component, Input } from '@angular/core';
import { IProduto } from '../../../models/produto.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../../../services/produtos.service';
import { ProdutosCartService } from '../../../services/produtos-cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produto-area',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produto-area.component.html',
  styleUrl: './produto-area.component.scss'
})
export class ProdutoAreaComponent {
  produto!: IProduto;
  quantity: number = 1;
  produtos!: Array<IProduto>;

  constructor(private produtosCartService: ProdutosCartService, private routes: ActivatedRoute, private produtosService: ProdutosService) { }

  
  ngOnInit(): void {
    this.produtosService.getProducts().subscribe(a => {
      this.produtos = a;
      
      const id = Number(this.routes.snapshot.paramMap.get("id"));
      const buscaProduto = this.produtos.find(value => value.id == id);
    if (buscaProduto) {
      this.produto = buscaProduto;
    }
    console.log(this.produto);
    });
  }

  addCart(id: number) {
    if (id === undefined) {
      console.error("Id is undefined");
      return
    }
    
    const product = this.produtos.find(p => p.id == id);
    if (product) {
      if (this.quantity > 1) {
        product.quantity = this.quantity;
      }
      this.produtosCartService.addProduct(product, this.quantity);
    } else {
      console.log("Product not found");
    }
  }

  addProductToCart(id: any) {
    if (id !== undefined) {
      this.addCart(id);
    }
  }
}
import { Component } from '@angular/core';
import { IProduto } from '../../models/produto.model';
import { CommonModule } from '@angular/common';
import { ProdutosService } from '../../services/produtos.service';
import { ProdutosCartService } from '../../services/produtos-cart.service';

@Component({
  selector: 'app-populars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './populars.component.html',
  styleUrl: './populars.component.scss'
})
export class PopularsComponent {
  produtos?: Array<IProduto>;

  constructor(private produtosService: ProdutosService, private produtosCartService: ProdutosCartService) { 
    this.produtos = this.produtosService.getProducts()
  }

  addToCart(product: IProduto) {
    this.produtosCartService.addProduct(product);
  }
}

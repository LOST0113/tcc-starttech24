import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CategoriasService } from '../../services/categorias.service';
import { ICategoria } from '../../models/categoria.model';
import { CommonModule } from '@angular/common';
import { ProdutosService } from '../../services/produtos.service';
import { IProduto1 } from '../../models/produto1.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export class CategoriasComponent implements OnInit{
  produtos: Array<IProduto1> = [];
  categorias: Array<ICategoria> = [];
  nomeCategorias: Array<String> = [];

  constructor(private categoriasService: CategoriasService, private produtosService: ProdutosService, private router: Router) { }

  ngOnInit(): void {
    this.getProdutos();
    this.getCategorias();
    this.getNomeCategorias();    
  }

  getCategorias() {
    this.categoriasService.getCategorias().subscribe((dado) => {
      this.categorias = dado;
    });
  }

  getNomeCategorias() {
    this.categoriasService.getCategorias().subscribe((dado) => {
      this.nomeCategorias = dado.map(dado => dado.nome);
    });
  }

  getProdutos() {
    this.produtosService.getProducts().subscribe((dado) => {
      this.produtos = dado;
      console.log(this.produtos);
    })
  }

  viewProduct(id: bigint) {
    this.router.navigate([`/produto/${id}`]);
  }
}

import { Component } from '@angular/core';
import { IProduto } from '../../models/produto.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-populars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './populars.component.html',
  styleUrl: './populars.component.scss'
})
export class PopularsComponent {
  produtos: IProduto[] = [{name: "Grifo", image: "images/caneca.jpg", description: "Night lamp", price: 200},
    {name: "Grifo", image: "images/caneca.jpg", description: "Night lamp", price: 200},
    {name: "Grifo", image: "images/caneca.jpg", description: "Night lamp", price: 200},
    {name: "Grifo", image: "images/caneca.jpg", description: "Night lamp", price: 200},
    {name: "Grifo", image: "images/caneca.jpg", description: "Night lamp", price: 200},
    {name: "Grifo", image: "images/caneca.jpg", description: "Night lamp", price: 200},
    {name: "Grifo", image: "images/caneca.jpg", description: "Night lamp", price: 200},
    {name: "Grifo", image: "images/caneca.jpg", description: "Night lamp", price: 200}
  ];
}

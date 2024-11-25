import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { ProdutoComponent } from './components/produto/produto.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: 'full'},
    {path: "home", component: HomeComponent},
    {path: "register", component: RegisterComponent},
    {path: "cart", component: CartComponent},
    {path: "produto", component: ProdutoComponent},
    {path: "produto/:id", component: ProdutoComponent}
];

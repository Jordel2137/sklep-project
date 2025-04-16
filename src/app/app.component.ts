import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { PanelComponent } from './pages/panel/panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartComponent, CommonModule, ProductsComponent, PanelComponent],
  templateUrl: './app.component.html'
})

export class AppComponent {
  showCart = false;

  constructor(private router: Router) {}


  toggleCart() {
    this.showCart = !this.showCart;
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],  // Dodajemy CommonModule do imports
  templateUrl: './cart.component.html'
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  buy() {
    this.cartService.buy();
  }
}

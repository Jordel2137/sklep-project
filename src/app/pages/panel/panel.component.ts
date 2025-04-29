import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-panel',
  imports: [CommonModule],
  templateUrl: './panel.component.html',
  standalone: true,
  styleUrl: './panel.component.css'
})
export class PanelComponent implements OnInit {
  orders: { id: number; name: string; price?: number }[][] = [];

  constructor(
    public productService: ProductService,
    public cartService: CartService
  ) {}

  ngOnInit() {
    this.orders = [...this.cartService.orders];
    this.cartService.orderAdded.subscribe(() => {
      this.orders = [...this.cartService.orders];
    });
  }
}

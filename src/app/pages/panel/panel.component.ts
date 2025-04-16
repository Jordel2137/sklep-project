import { Component } from '@angular/core';
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
export class PanelComponent {
  constructor(
    public productService: ProductService,
    public cartService: CartService
  ) {}
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  categories: string[] = ['Kategoria 1', 'Kategoria 2'];
  filteredProducts: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.productService.getProducts().subscribe(products => {
      this.filteredProducts = products;
    });
  }

  filter(category: string) {
    this.productService.getProducts().subscribe(products => {
      this.filteredProducts = products.filter((p: Product) => p.category === category);
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  showAll() {
    this.productService.getProducts().subscribe(products => {
      this.filteredProducts = products;
    });
  }
}

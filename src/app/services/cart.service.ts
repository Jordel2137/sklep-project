import { Injectable } from '@angular/core';
import { Product } from './product.service';

@Injectable({ providedIn: 'root' })
export class CartService {
  cart: Product[] = [];
  orders: Product[][] = [];

  addToCart(p: Product) {
    console.log("dodano");
    this.cart.push(p);
  }

  buy() {
    this.orders.push([...this.cart]);
    this.cart = [];
  }

  removeOrder(i: number) {
    this.orders.splice(i, 1);
  }
}

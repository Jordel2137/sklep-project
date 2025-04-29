import { Injectable } from '@angular/core';
import { Product } from './product.service';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  cart: Product[] = [];
  orders: Product[][] = [];
  orderAdded = new Subject<number>();

  addToCart(p: Product) {
    console.log("dodano");
    this.cart.push(p);
  }

  buy() {
    this.orders.push([...this.cart]);
    this.orderAdded.next(this.orders.length);
    this.cart = [];
  }

  removeOrder(i: number) {
    this.orders.splice(i, 1);
  }
}

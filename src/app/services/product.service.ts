import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  desc: string;
  category: string;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  products = [
    { id: 1, name: 'Produkt A', desc: 'Opis A', category: 'Kategoria 1', image: '...' },
    { id: 2, name: 'Produkt B', desc: 'Opis B', category: 'Kategoria 2', image: '...' },
  ];
  getProducts() { return this.products; }
}

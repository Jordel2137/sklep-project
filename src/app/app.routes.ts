import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { PanelComponent } from './pages/panel/panel.component';

export const routes: Routes = [
  { path: 'produkty', component: ProductsComponent },
  { path: 'panel', component: PanelComponent },
  { path: '', redirectTo: '/produkty', pathMatch: 'full' }
];

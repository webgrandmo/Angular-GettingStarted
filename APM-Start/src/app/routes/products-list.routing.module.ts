import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { ProductDetailGuard } from '../products/product-detail/product-detail.guard';
import { ProductDetailComponent } from '../products/product-detail/product-detail.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent },
      {path: 'products/:id', canActivate:[ProductDetailGuard], component: ProductDetailComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsListRoutingModule { }

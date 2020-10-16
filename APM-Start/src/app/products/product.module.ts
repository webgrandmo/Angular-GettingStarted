import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListRoutingModule } from '../routes/products-list.routing.module';
import { SharedModule } from '../shared/shared.module'
import { ProductListComponent } from '../products/product-list/product-list.component';
import { ProductDetailComponent } from '../products/product-detail/product-detail.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsListRoutingModule,
  ]
})
export class ProductModule { }

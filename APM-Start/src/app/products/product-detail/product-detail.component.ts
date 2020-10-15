import { Component, OnInit } from '@angular/core';
import { Product } from '../product-list/product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  productDetailTitle: string = 'Product Detail';

  constructor() { }

  ngOnInit(): void {
  }

}

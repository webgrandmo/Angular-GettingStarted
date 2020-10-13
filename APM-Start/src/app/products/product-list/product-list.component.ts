import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from '../products.service';
@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productListTitle: string = 'Product List';
  showImg: boolean = false;
  imgWidth: number = 50;
  private _listFilter: string;
  errorMsg: any;
  
  public get listFilter() : string {
    return this._listFilter;
  }
  
  public set listFilter(v : string) {
    this._listFilter = v;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  
  
  filteredProducts: Product[];
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMsg = err,
    });
  }

  onShowImg() {
    this.showImg = !this.showImg;
  }

  onRatingClicked(msg: string): void {
    this.productListTitle = this.productListTitle + ' ' + msg;
  }

  performFilter(filteredBy: string): Product[] {
    
    filteredBy = filteredBy.toLocaleLowerCase();
    
    return this.products.filter( (product: Product) => 
      product.productName.toLocaleLowerCase().indexOf(filteredBy) !== -1
    );
      
  }
   
}

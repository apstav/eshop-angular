import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product, ProductAPIList } from '../product.interfaces';
import { Subscription } from 'rxjs';
import { orderBy } from 'lodash-es';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService) {}

  loading = false;
  productList: Product[] = [];
  subscription: Subscription | undefined;

  productSortType: 'asc' | 'desc' = 'asc';

  ngOnInit(): void {
    console.log('Starting find all API call');
    this.loading = true;
    this.productService.findAll().subscribe({
      next: (apiData: ProductAPIList) => {
        const { status, data } = apiData;
        this.productList = data;
        console.log(status, data);
      },
      error: (error) => {
        this.loading = false;
        console.log(error);
      },
      complete: () => {
        this.loading = false;
        console.log('API call completed!');
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  toggleSort(key: string) {
    switch (key) {
      case 'product':
        this.productSortType = this.productSortType === 'asc' ? 'desc' : 'asc';
        this.productList = orderBy(
          this.productList,
          [key],
          [this.productSortType]
        );
        break;
      default:
        break;
    }
  }
}

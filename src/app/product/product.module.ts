import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInsertComponent } from './product-insert/product-insert.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './product.service';

const routes: Routes = [
  { path: 'list', component: ProductListComponent },
  { path: 'insert', component: ProductInsertComponent },
];

@NgModule({
  declarations: [ProductInsertComponent, ProductListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ProductService],
})
export class ProductModule {}

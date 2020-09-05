import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';


const routes: Routes =[{
  path: '' , component: HomeComponent
},
{
  path: 'aboutus' , component: AboutUsComponent
},
{
  path: 'product',
  children: [
    {
      path: 'productList', component: ProductComponent
    },
    {
      path: 'addProduct', component: AddProductComponent
    }
  ]
},
{
  path: '**' , component: PageNotFoundComponent
}
];


@NgModule({
  imports: [
    (RouterModule.forRoot(routes))
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

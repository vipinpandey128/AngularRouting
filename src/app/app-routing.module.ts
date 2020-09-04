import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes =[
  {path:'', component:HomeComponent},
  {path:'about', component:AboutusComponent},
  {path:'contact', component:ContactComponent},
  {
    path:'product',
    children:[
      {
        path:'add', component:AddProductComponent
      },
      {
        path:'details', component:ProductComponent
      },
      {
        path:'list', component:ProductListComponent
      },
    ]
  },
  {path:'**', component:PagenotfoundComponent}
];


@NgModule({
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

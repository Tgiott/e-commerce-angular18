import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./views/home/home.component";
import {ProductCrudComponent} from "./views/product-crud/product-crud.component";
import {ContatoComponent} from "./views/contato/contato.component"
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';



const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'/home' },
  {path: "home", component: HomeComponent},
  {path:"products", component: ProductCrudComponent },
  {path:"contato", component: ContatoComponent},
  {path:"products/create", component: ProductCreateComponent},
  {path:"products/update/:id", component: ProductUpdateComponent},
  {path:"products/delete/:id", component: ProductDeleteComponent}

]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

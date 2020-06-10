import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MaterialModule } from '../material.module';
import { PeopleComponent } from './modules/people/people.component';
import { ProductsComponent } from './modules/products/products.component';


@NgModule({
  declarations: [PeopleComponent, ProductsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule
  ]
})
export class MainModule { }

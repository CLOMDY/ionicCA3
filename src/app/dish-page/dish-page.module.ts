import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DishPagePageRoutingModule } from './dish-page-routing.module';

import { DishPagePage } from './dish-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DishPagePageRoutingModule
  ],
  declarations: [DishPagePage]
})
export class DishPagePageModule {}

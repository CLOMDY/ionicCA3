import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';
import { Slider2Component } from '../slider2/slider2.component';



@NgModule({
  declarations: [SliderComponent, Slider2Component],
  imports: [
    CommonModule
  ],
  exports: [SliderComponent, Slider2Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CommonModuleModule { }

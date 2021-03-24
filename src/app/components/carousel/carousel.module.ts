import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { SlideComponent } from './slide/slide.component';



@NgModule({
  declarations: [
    CarouselComponent,
    SlideComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CarouselComponent,
    SlideComponent
  ]
})
export class CarouselModule { }

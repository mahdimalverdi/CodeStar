import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideComponent } from './slide/slide.component';



@NgModule({
  declarations: [
    CarouselComponent,
    SlideComponent
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    // BrowserAnimationsModule
  ],
  exports:[
    CarouselComponent,
    SlideComponent
  ]
})
export class CarouselModule { }

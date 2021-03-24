import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'src/app/components/carousel/carousel.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ToolbarModule,
    CarouselModule,
    MatIconModule
  ]
})
export class HomeModule { }

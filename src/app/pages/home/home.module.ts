import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HeaderModule} from 'src/app/components/header/header.module';
import {HomeComponent} from './home.component';
import {CarouselModule} from 'src/app/components/carousel/carousel.module';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        HeaderModule,
        CarouselModule,
    ],
})
export class HomeModule {
}

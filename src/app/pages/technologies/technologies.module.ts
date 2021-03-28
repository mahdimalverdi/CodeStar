import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TechnologiesRoutingModule} from './technologies-routing.module';
import {TechnologiesComponent} from './technologies.component';
import {HeaderModule} from 'src/app/components/header/header.module';
import {FooterModule} from 'src/app/components/footer/footer.module';

@NgModule({
    declarations: [
        TechnologiesComponent,
    ],
    imports: [
        CommonModule,
        TechnologiesRoutingModule,
        HeaderModule,
        FooterModule,
    ],
})
export class TechnologiesModule {
}

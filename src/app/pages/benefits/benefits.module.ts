import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BenefitsRoutingModule} from './benefits-routing.module';
import {BenefitsComponent} from './benefits.component';
import {HeaderModule} from 'src/app/components/header/header.module';
import {FooterModule} from 'src/app/components/footer/footer.module';

@NgModule({
    declarations: [
        BenefitsComponent,
    ],
    imports: [
        CommonModule,
        BenefitsRoutingModule,
        HeaderModule,
        FooterModule,
    ],
})
export class BenefitsModule {
}

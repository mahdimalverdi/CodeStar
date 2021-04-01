import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BenefitsRoutingModule} from './benefits-routing.module';
import {BenefitsComponent} from './benefits.component';
import {FooterModule} from 'src/app/components/footer/footer.module';
import {IllustrationsModule} from '../../illustrations/illustrations.module';
import {HeaderModule} from '../../components/header/header.module';

@NgModule({
    declarations: [
        BenefitsComponent,
    ],
    imports: [
        CommonModule,
        BenefitsRoutingModule,
        IllustrationsModule,
        FooterModule,
        IllustrationsModule,
        IllustrationsModule,
        IllustrationsModule,
        HeaderModule,
    ],
})
export class BenefitsModule {
}

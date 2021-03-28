import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BenefitsRoutingModule} from './benefits-routing.module';
import {BenefitsComponent} from './benefits.component';
import {ToolbarModule} from 'src/app/components/toolbar/toolbar.module';
import {FooterModule} from 'src/app/components/footer/footer.module';

@NgModule({
    declarations: [
        BenefitsComponent,
    ],
    imports: [
        CommonModule,
        BenefitsRoutingModule,
        ToolbarModule,
        FooterModule,
    ],
})
export class BenefitsModule {
}

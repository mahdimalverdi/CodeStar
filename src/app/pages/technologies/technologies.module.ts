import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TechnologiesRoutingModule} from './technologies-routing.module';
import {TechnologiesComponent} from './technologies.component';
import {ToolbarModule} from 'src/app/components/toolbar/toolbar.module';
import {FooterModule} from 'src/app/components/footer/footer.module';

@NgModule({
    declarations: [
        TechnologiesComponent,
    ],
    imports: [
        CommonModule,
        TechnologiesRoutingModule,
        ToolbarModule,
        FooterModule,
    ],
})
export class TechnologiesModule {
}

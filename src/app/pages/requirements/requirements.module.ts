import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RequirementsRoutingModule} from './requirements-routing.module';
import {FooterModule} from 'src/app/components/footer/footer.module';
import {HeaderModule} from 'src/app/components/header/header.module';
import {RequirementsComponent} from './requirements.component';

@NgModule({
    declarations: [
        RequirementsComponent,
    ],
    imports: [
        CommonModule,
        RequirementsRoutingModule,
        HeaderModule,
        FooterModule,
    ]
})
export class RequirementsModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TimelineRoutingModule} from './timeline-routing.module';
import {TimelineComponent} from './timeline.component';
import {HeaderModule} from 'src/app/components/header/header.module';
import {FooterModule} from 'src/app/components/footer/footer.module';

@NgModule({
    declarations: [TimelineComponent],
    imports: [
        CommonModule,
        TimelineRoutingModule,
        HeaderModule,
        FooterModule,
    ],
})
export class TimelineModule {
}

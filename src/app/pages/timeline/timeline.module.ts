import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TimelineRoutingModule} from './timeline-routing.module';
import {TimelineComponent} from './timeline.component';
import {ToolbarModule} from 'src/app/components/toolbar/toolbar.module';
import {FooterModule} from 'src/app/components/footer/footer.module';

@NgModule({
    declarations: [TimelineComponent],
    imports: [
        CommonModule,
        TimelineRoutingModule,
        ToolbarModule,
        FooterModule,
    ],
})
export class TimelineModule {
}

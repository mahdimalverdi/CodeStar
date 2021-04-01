import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer.component';
import {IllustrationsModule} from '../../illustrations/illustrations.module';

@NgModule({
    declarations: [
        FooterComponent,
    ],
    imports: [
        CommonModule,
        IllustrationsModule,
    ],
    exports: [
        FooterComponent,
    ],
})
export class FooterModule {
}

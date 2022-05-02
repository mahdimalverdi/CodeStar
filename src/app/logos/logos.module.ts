import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CodeStarComponent} from './code-star/code-star.component';

@NgModule({
    declarations: [CodeStarComponent],
    imports: [CommonModule],
    exports: [CodeStarComponent],
})
export class LogosModule {}

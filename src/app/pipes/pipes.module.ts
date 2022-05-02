import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ComponentNameToTitleCasePipe} from './component-name-to-title-case.pipe';
import {PascalCaseToTitleCasePipe} from './pascal-case-to-title-case.pipe';
import {WordsToTitleCasePipe} from './words-to-title-case.pipe';

@NgModule({
    declarations: [ComponentNameToTitleCasePipe, PascalCaseToTitleCasePipe, WordsToTitleCasePipe],
    imports: [CommonModule],
    exports: [ComponentNameToTitleCasePipe, PascalCaseToTitleCasePipe, WordsToTitleCasePipe],
})
export class PipesModule {}

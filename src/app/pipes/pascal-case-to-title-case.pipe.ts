import {Pipe, PipeTransform} from '@angular/core';

import {pascalCaseToTitleCase} from '../utils/string.utils';

@Pipe({
    name: 'pascalCaseToTitleCase',
})
export class PascalCaseToTitleCasePipe implements PipeTransform {
    public transform(value: string): string {
        return pascalCaseToTitleCase(value);
    }
}

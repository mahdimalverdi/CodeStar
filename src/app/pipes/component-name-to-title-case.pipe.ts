import {Pipe, PipeTransform} from '@angular/core';

import {pascalCaseToTitleCase} from '../utils/string.utils';

@Pipe({
    name: 'componentNameToTitleCase',
})
export class ComponentNameToTitleCasePipe implements PipeTransform {
    public transform(value: string): string {
        return pascalCaseToTitleCase(value).replace(' Component', '');
    }
}

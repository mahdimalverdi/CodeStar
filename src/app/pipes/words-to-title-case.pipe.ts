import {Pipe, PipeTransform} from '@angular/core';

import {wordsToTitleCase} from '../utils/string.utils';

@Pipe({
    name: 'wordsToTitleCase',
})
export class WordsToTitleCasePipe implements PipeTransform {
    public transform(value: string): string {
        return wordsToTitleCase(value);
    }
}

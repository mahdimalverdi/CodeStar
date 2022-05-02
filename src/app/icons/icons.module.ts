import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AparatComponent} from './aparat/aparat.component';
import {FaqComponent} from './faq/faq.component';
import {InstagramComponent} from './instagram/instagram.component';
import {TelegramComponent} from './telegram/telegram.component';

@NgModule({
    declarations: [AparatComponent, FaqComponent, InstagramComponent, TelegramComponent],
    imports: [CommonModule],
    exports: [AparatComponent, FaqComponent, InstagramComponent, TelegramComponent],
})
export class IconsModule {}

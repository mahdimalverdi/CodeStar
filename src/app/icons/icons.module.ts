import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AparatComponent} from './aparat/aparat.component';
import {FaqComponent} from './faq/faq.component';
import {InstagramComponent} from './instagram/instagram.component';
import {LinkedinComponent} from './linkedin/linkedin.component';
import {TelegramComponent} from './telegram/telegram.component';

@NgModule({
    declarations: [AparatComponent, FaqComponent, InstagramComponent, LinkedinComponent, TelegramComponent],
    imports: [CommonModule],
    exports: [AparatComponent, FaqComponent, InstagramComponent, LinkedinComponent, TelegramComponent],
})
export class IconsModule {}

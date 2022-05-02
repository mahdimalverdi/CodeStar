import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {IconsModule} from '../icons/icons.module';
import {LogosModule} from '../logos/logos.module';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    imports: [CommonModule, RouterModule, IconsModule, LogosModule],
    exports: [HeaderComponent, FooterComponent],
})
export class ComponentsModule {}

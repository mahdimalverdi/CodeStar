import {Component} from '@angular/core';
import {Meta} from '@angular/platform-browser';

import colors, {generateLinearBackground} from '../../utils/colors';

@Component({
    selector: 'app-benefits',
    templateUrl: './benefits.component.html',
    styleUrls: ['./benefits.component.scss'],
})
export class BenefitsComponent {
    public colors = {
        light: colors.orangered.light,
        dark: colors.orangered.dark,
    };
    
    public style = {
        '--color-primary--light': this.colors.light,
        '--color-primary--dark': this.colors.dark,
    };
    
    constructor(private meta: Meta) {
        this.meta.removeTag('name="theme-color"');
        this.meta.addTag({name: 'theme-color', content: this.colors.dark}, true);
    }
    
    public get footerBackground() {
        return generateLinearBackground(this.colors.light, this.colors.dark);
    }
}

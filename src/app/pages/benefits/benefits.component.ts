import {Component} from '@angular/core';
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
        '--color-primary--light': colors.orangered.light,
        '--color-primary--dark': colors.orangered.dark,
    };
    
    public get footerBackground() {
        return generateLinearBackground(this.colors.light, this.colors.dark);
    }
}

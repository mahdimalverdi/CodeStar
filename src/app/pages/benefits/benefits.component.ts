import {Component} from '@angular/core';
import colors from '../../models/colors';

@Component({
    selector: 'app-benefits',
    templateUrl: './benefits.component.html',
    styleUrls: ['./benefits.component.scss'],
})
export class BenefitsComponent {
    public svgColors = {
        light: colors.orangered.light,
        dark: colors.orangered.dark,
    };
    
    public style = {
        '--color-primary--light': colors.orangered.light,
        '--color-primary--dark': colors.orangered.dark,
    };
}

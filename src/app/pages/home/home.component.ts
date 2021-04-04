import {Component} from '@angular/core';
import {Meta} from '@angular/platform-browser';

import colors from '../../utils/colors';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public slideColors = [
        colors.purple,
        colors.blue,
        colors.green,
    ];
    public slideColorsStyle = {};
    
    private headerMenuOpen = false;
    private currentSlide = 0;
    
    constructor(private meta: Meta) {
        for (const [i, color] of this.slideColors.entries()) {
            this.slideColorsStyle[`--slide-color-${i + 1}-1`] = color.light;
            this.slideColorsStyle[`--slide-color-${i + 1}-2`] = color.dark;
        }
        
        this.updateThemeColor();
    }
    
    public headerMenuOpenChangeHandler(open: boolean) {
        this.headerMenuOpen = open;
        this.updateThemeColor();
    }
    
    public updateThemeColor(currentSlide: number = this.currentSlide) {
        this.currentSlide = currentSlide;
        
        if (!this.headerMenuOpen)
            setTimeout(() => this.setThemeColor(this.slideColors[currentSlide][0]), 250);
        else
            this.setThemeColor('#1a1a1a');
    }
    
    private setThemeColor(content: string) {
        this.meta.removeTag('name="theme-color"');
        this.meta.addTag({name: 'theme-color', content}, true);
    }
}

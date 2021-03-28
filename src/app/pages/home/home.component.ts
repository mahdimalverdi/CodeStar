import {Component} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public slideColors = [
        ['#30134d', '#200040'],
        ['#1a3366', '#001233'],
        // ['#ff9716', '#ca792f'],
        ['#053305', '#002600'],
    ];
    public slideColorsStyle = {};
    
    private headerMenuOpen = false;
    private currentSlide = 0;
    
    constructor(private meta: Meta) {
        for (const [i, colors] of this.slideColors.entries()) {
            this.slideColorsStyle[`--slide-color-${i + 1}-1`] = colors[0];
            this.slideColorsStyle[`--slide-color-${i + 1}-2`] = colors[1];
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

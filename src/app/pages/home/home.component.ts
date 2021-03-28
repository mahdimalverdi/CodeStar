import {Component} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public slideColors = [
        ['#3c62a5', '#183365'],
        ['#ff9716', '#ca792f'],
        ['#30b340', '#194e2d'],
    ];
    
    public slideColorsStyle = {};
    
    constructor(private meta: Meta) {
        for (const [i, colors] of this.slideColors.entries()) {
            this.slideColorsStyle[`--slide-color-${i + 1}-1`] = colors[0];
            this.slideColorsStyle[`--slide-color-${i + 1}-2`] = colors[1];
        }
        
        this.slideChangeHandler(0);
    }
    
    public slideChangeHandler(currentSlide: number) {
        this.meta.removeTag('name="theme-color"');
        this.meta.addTag({name: 'theme-color', content: this.slideColors[currentSlide][1]}, true);
    }
}

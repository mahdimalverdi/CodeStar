import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    @Input() public theme: 'dark' | 'light' = 'dark';
    
    @Output() openChange = new EventEmitter<boolean>();
    
    public open = false;
    
    private lastThemeColor;
    
    constructor(private meta: Meta) {}
    
    @HostListener('window:resize', ['$event'])
    getScreenSize() {
        if (window.innerWidth >= 768)
            this.open = false;
    }
    
    public toggleOpen() {
        this.open = !this.open;
        
        if (this.theme === 'light') {
            if (this.open) {
                this.lastThemeColor = this.meta.getTag('name="theme-color"').content;
                console.log(this.lastThemeColor);
                this.setThemeColor('#1a1a1a');
            } else {
                this.setThemeColor(this.lastThemeColor);
            }
        }
        
        this.openChange.emit(this.open);
    }
    
    private setThemeColor(content: string) {
        this.meta.removeTag('name="theme-color"');
        this.meta.addTag({name: 'theme-color', content}, true);
    }
}

import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    @Input()
    public theme: 'dark' | 'light' = 'dark';
    
    @Output() openChange = new EventEmitter<boolean>();
    
    public open = false;
    
    @HostListener('window:resize', ['$event'])
    getScreenSize() {
        if (window.innerWidth >= 768)
            this.open = false;
    }
    
    public toggleOpen() {
        this.open = !this.open;
        this.openChange.emit(this.open);
    }
}

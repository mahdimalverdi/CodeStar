import {AfterViewInit, Component, ContentChildren, EventEmitter, Output, QueryList} from '@angular/core';
import {SlideComponent} from './slide/slide.component';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
    @ContentChildren(SlideComponent) inputTabs: QueryList<SlideComponent>;
    
    @Output() public slideChange = new EventEmitter<number>();
    
    public templates: any[] = [];
    public currentSlide = 0;
    private timeoutTime = 20000;
    private timeout: any;
    
    ngAfterViewInit(): void {
        setTimeout(() => this.templates = this.inputTabs.map(i => i.template), 100);
        this.setTimeout();
    }
    
    public swipeHandler(e) {
        if (e.direction === 2)
            this.onPreviousClick();
        else if (e.direction === 4)
            this.onNextClick();
    }
    
    public onPreviousClick() {
        const previous = this.currentSlide - 1;
        this.currentSlide = previous < 0 ? this.inputTabs.length - 1 : previous;
        this.resetTimeout();
    }
    
    public onNextClick() {
        const next = this.currentSlide + 1;
        this.currentSlide = next === this.inputTabs.length ? 0 : next;
        this.resetTimeout();
    }
    
    private setTimeout() {
        this.timeout = setTimeout(() => this.onNextClick(), this.timeoutTime);
    }
    
    private resetTimeout() {
        clearTimeout(this.timeout);
        this.setTimeout();
        
        this.slideChange.emit(this.currentSlide);
    }
}

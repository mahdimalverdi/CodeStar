import {
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Output,
    QueryList,
    ViewChild,
} from '@angular/core';
import {SlideComponent} from './slide/slide.component';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
    @ViewChild('slidesRef') slidesRef: ElementRef;
    @ContentChildren(SlideComponent) inputTabs: QueryList<SlideComponent>;
    
    @Output() public slideChange = new EventEmitter<number>();
    
    public templates: any[] = [];
    
    private slides: HTMLElement;
    private currentSlide = 0;
    private timeoutTime = 20000;
    private timeout: any;
    private transferredToLeft: boolean = true;
    private transitionEnded: boolean = true;
    
    ngAfterViewInit(): void {
        this.slides = this.slidesRef.nativeElement as HTMLElement;
        
        setTimeout(() => this.templates = this.inputTabs.map(i => i.template));
        this.resetTimeout();
    }
    
    public slidesTransitionEndHandler(e) {
        if (e.target !== this.slides)
            return;
        
        if (this.transferredToLeft)
            this.rotateForward();
        else
            this.rotateBackward();
        
        this.slides.style.transition = 'none';
        this.slides.style.transform = 'translate(0)';
        
        setTimeout(() => {
            this.slides.style.transition = 'transform 0.5s ease-in-out';
            this.transitionEnded = true;
        });
    }
    
    public onPreviousClick() {
        this.changeSlide(false);
    }
    
    public onNextClick() {
        this.changeSlide(true);
    }
    
    public changeSlide(increment: boolean) {
        if (!this.transitionEnded)
            return;
        
        this.transitionEnded = false;
        
        if (increment) {
            if (!this.transferredToLeft)
                this.rotateBackward();
            
            this.slides.style.justifyContent = 'flex-start';
            this.slides.style.transform = 'translate(100%)';
        } else {
            if (this.transferredToLeft)
                this.rotateForward();
            
            this.slides.style.justifyContent = 'flex-end';
            this.slides.style.transform = 'translate(-100%)';
        }
        
        this.transferredToLeft = increment;
        
        this.currentSlide = (this.currentSlide + (increment ? 1 : -1) + 3) % 3;
        this.resetTimeout();
    }
    
    private resetTimeout() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => this.onNextClick(), this.timeoutTime);
        
        this.slideChange.emit(this.currentSlide);
    }
    
    private rotateForward() {
        this.templates.push(this.templates.splice(0, 1)[0]);
    }
    
    private rotateBackward() {
        this.templates.unshift(this.templates.pop());
    }
}

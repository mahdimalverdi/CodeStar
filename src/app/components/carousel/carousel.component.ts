import { animate, style, transition, trigger } from '@angular/animations';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { SlideComponent } from './slide/slide.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(+500px)' }),
        animate(
          '300ms ease-in',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 0, transform: 'translateX(-500px)' })
        ),
      ]),
    ])
  ]
})
export class CarouselComponent implements AfterViewInit {
  @ContentChildren(SlideComponent) inputTabs: QueryList<SlideComponent>;

  public currentSlide = 0;
  private timeoutTime = 500000;

  constructor() { }
  ngAfterViewInit(): void {
    this.setTimeout();
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

  private timeout: any;


  private setTimeout() {
    this.timeout = setTimeout(() => this.onNextClick(), this.timeoutTime);
  }

  private resetTimeout() {
    clearTimeout(this.timeout);
    this.setTimeout();
  }
}

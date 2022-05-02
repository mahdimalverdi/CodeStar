import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {IntersectionObserverService} from '../../services/intersection-observer.service';

@Component({
    selector: 'app-numbers',
    templateUrl: './numbers.component.html',
    styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent implements AfterViewInit {
    @ViewChild('section') private section!: ElementRef<HTMLElement>;

    public constructor(private service: IntersectionObserverService) {}

    public ngAfterViewInit(): void {
        const options: IntersectionObserverInit = {rootMargin: '-120px 0px'};
        this.service.initObserver(this.section.nativeElement, 'header, li', options);
    }
}

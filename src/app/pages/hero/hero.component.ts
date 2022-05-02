import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {IntersectionObserverService} from '../../services/intersection-observer.service';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements AfterViewInit {
    @ViewChild('section') private section!: ElementRef<HTMLElement>;

    public constructor(private service: IntersectionObserverService) {}

    public ngAfterViewInit(): void {
        this.service.initObserver(this.section.nativeElement, '.watermark, .line, p, .button');
    }
}

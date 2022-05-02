import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {IntersectionObserverService} from '../../services/intersection-observer.service';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements AfterViewInit {
    @ViewChild('frontendSection') private frontendSection!: ElementRef<HTMLElement>;
    @ViewChild('softwareSection') private softwareSection!: ElementRef<HTMLElement>;

    public constructor(private service: IntersectionObserverService) {}

    public ngAfterViewInit(): void {
        const options: IntersectionObserverInit = {rootMargin: '-120px 0px'};
        this.service.initObserver(this.frontendSection.nativeElement, 'header, .icon, h3, p', options);
        this.service.initObserver(this.softwareSection.nativeElement, 'header, .icon, h3, p', options);
    }
}

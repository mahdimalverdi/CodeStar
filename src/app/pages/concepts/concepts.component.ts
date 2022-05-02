import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {IntersectionObserverService} from '../../services/intersection-observer.service';

@Component({
    selector: 'app-concepts',
    templateUrl: './concepts.component.html',
    styleUrls: ['./concepts.component.scss'],
})
export class ConceptsComponent implements AfterViewInit {
    @ViewChild('section') private section!: ElementRef<HTMLElement>;

    public constructor(private service: IntersectionObserverService) {}

    public ngAfterViewInit(): void {
        const options: IntersectionObserverInit = {rootMargin: '-120px 0px'};
        this.service.initObserver(this.section.nativeElement, 'header, h3, p', options);
    }
}

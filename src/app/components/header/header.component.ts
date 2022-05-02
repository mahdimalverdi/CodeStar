import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {IntersectionObserverService} from '../../services/intersection-observer.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
    @ViewChild('header') private header!: ElementRef<HTMLElement>;

    public constructor(private service: IntersectionObserverService) {}

    public ngAfterViewInit(): void {
        this.service.initObserver(this.header.nativeElement, 'a');
    }
}

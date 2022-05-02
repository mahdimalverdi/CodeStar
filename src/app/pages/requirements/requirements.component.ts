import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-requirements',
    templateUrl: './requirements.component.html',
    styleUrls: ['./requirements.component.scss'],
})
export class RequirementsComponent implements AfterViewInit {
    private readonly MINIMUM_DELAY: number = 0;
    private readonly MAXIMUM_DELAY: number = 1000;

    @ViewChild('frontendSection') private frontendSection!: ElementRef<HTMLElement>;
    @ViewChild('softwareSection') private softwareSection!: ElementRef<HTMLElement>;

    private observer!: IntersectionObserver;

    public ngAfterViewInit(): void {
        this.initObserver();
    }

    private initObserver(): void {
        this.observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry) => {
                    const element: HTMLElement | null = entry.target as HTMLElement;
                    if (!element || !entry.isIntersecting) return;

                    const delay = element.tagName === 'LI' ? this.generateRandomDelay() : 0;
                    setTimeout(() => element.classList.add('fade-in'), delay);

                    this.observer.unobserve(element);
                });
            },
            {
                rootMargin: '-100px 0px',
                threshold: 1,
            }
        );

        this.observeElements(this.frontendSection.nativeElement);
        this.observeElements(this.softwareSection.nativeElement);
    }

    private observeElements(section: HTMLElement): void {
        const items: HTMLElement[] = Array.from(section.querySelectorAll('header, h3, li'));
        items.forEach((item) => {
            this.observer.observe(item);
        });
    }

    private generateRandomDelay(): number {
        return Math.random() * (this.MAXIMUM_DELAY - this.MINIMUM_DELAY) + this.MINIMUM_DELAY;
    }
}

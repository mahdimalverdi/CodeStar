import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';
import {IntersectionObserverService} from '../../services/intersection-observer.service';
import {FlipService} from '../../services/flip.service';

interface Item {
    question: string;
    answer: string;
    isOpen?: boolean;
}

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements AfterViewInit {
    private readonly ANIMATION_DURATION: number = 500;

    @ViewChild('section') private section!: ElementRef<HTMLElement>;

    public items: Item[] = [
        {
            question: 'آیا می‌توانم این دوره را به عنوان کارآموزی دانشگاه بگذرانم؟',
            answer: `
                بله! ولی همان طور که در قسمت‌های قبلی توضیح داده شد،
                دوره به صورت مرحله‌ای برگزار می‌شود و برای گذراندن هر مرحله،
                نیاز است تا امتیاز مورد نظر را به دست آورید؛
                بنابراین امتیازی که در هر مرحله کسب می‌کنید،
                به طور مستقیم بر روی نمره‌ای که برای کارآموزی دانشگاه شما ثبت می‌شود، تاثیر خواهد گذاشت.
            `,
        },
        {
            question: 'آیا محتوای دوره به صورت یک‌جا در اختیارم قرار می‌گیرد؟',
            answer: `
                محتوای دوره از همان ابتدا در اختیار تمام کارآموزان قرار می‌گیرد ولی برای گذراندن هر مرحله،
                برنامه‌ای فشرده داریم و معمولاً کارآموزان با سرعتی که ما پیش‌بینی می‌کنیم دوره را می‌گذرانند.
                البته برای عزیزانی که زودتر از موعد مقرر به هدف یک مرحله برسند، محتوای جانبی و امتیازی قرار
                داده‌ایم تا مطمئن شویم تمام کارآموزان از وقت خود نهایت استفاده را می‌برند.
            `,
        },
        {
            question: 'آیا دوره به صورت حضوری/مجازی برگزار می‌شود؟',
            answer: `
                دوره به سه صورتِ مجازی، حضوری در تهران و حضوری در اصفهان برگزار می‌شود
                که کارآموزها می‌توانند با توجه به شرایط خود، هر کدام را که صلاح می‌دانند انتخاب کنند.
                لازم به ذکر است که محتویات و کیفیت کارآموزی برای هر سه نوع کاملاً یکسان است
                و صرفاً برای راحتی کارآموزها، گزینه‌های مختلفی را ارائه کرده‌ایم.
            `,
        },
    ];

    private isPlaying: boolean = false;

    public constructor(
        private intersectionObserverService: IntersectionObserverService,
        private flipService: FlipService,
        private changeDetectorRef: ChangeDetectorRef
    ) {}

    public ngAfterViewInit(): void {
        const options: IntersectionObserverInit = {rootMargin: '-120px 0px'};
        this.intersectionObserverService.initObserver(this.section.nativeElement, 'header, h3', options);
    }

    public async questionClickHandler(index: number): Promise<void> {
        if (this.isPlaying) return;
        this.isPlaying = true;

        const generateDomRects = this.generateDomRects.bind(this);
        await FlipService.flip(
            generateDomRects,
            generateDomRects,
            () => {
                this.items[index].isOpen = !this.items[index].isOpen;
                this.changeDetectorRef.detectChanges();
            },
            {
                duration: this.ANIMATION_DURATION,
            }
        );

        this.isPlaying = false;
    }

    private generateDomRects(): Map<HTMLElement, DOMRect> {
        const result = new Map<HTMLElement, DOMRect>();

        const elements: HTMLElement[] = Array.from(this.section.nativeElement.querySelectorAll('li, .background'));
        elements.forEach((element) => {
            result.set(element, element.getBoundingClientRect());
        });

        return result;
    }
}

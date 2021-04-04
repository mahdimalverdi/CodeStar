import {Component} from '@angular/core';
import colors from '../../utils/colors';

interface Timeline {
    event: string;
    title: string;
    description: string;
}

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
    public timelines: Timeline[] = [
        {
            event: 'شروع',
            title: 'ثبت نام',
            description: 'در اولین قدم وارد سایت کوئرا بشید و در آزمون Front-End یا Software Engineering ثبت نام کنید',
        },
        {
            event: 'هفته اول و دوم اردیبهشت',
            title: 'آزمون اولیه',
            description: `هر کدوم از دوره‌ها یک آزمون ورودی داره که به صورت مسابقه در سایت کوئرا برگزار میشه. آزمون ورودی دورۀ Front-End در روز ۳ اردیبهشت و آزمون ورودی دورۀ Software Engineering در روز ۱۰ اردیبهشت برگزار میشه.`,
        },
        {
            event: 'اردیبهشت و خرداد',
            title: 'مصاحبه',
            description: `بر اساس امتیاز مسابقه و همچنین اصولی بودن و تمیز بودن کد‌های ارسالی در مسابقه، با نفرات برتر برای هماهنگی زمان مصاحبۀ دورۀ کارآموزی تماس می‌گیریم؛ مصاحبه به صورت ویدیو کنفرانس هست.`,
        },
        {
            event: 'اوایل مرداد',
            title: 'شروع دوره',
            description: `تبریک می‌گیم به شما رستم‌ها و گردآفریدهای کداستار! امیدواریم از دورۀ کارآموزی‌تون لذت ببرید و یادگیری زیادی داشته باشید ...`,
        },
    ];
    
    public selection = [
        colors.blueGreen,
        colors.darkGreen,
        colors.darkOrange,
        colors.magenta,
    ];
    
    public style = {};
    
    public constructor() {
        for (const [i, color] of this.selection.entries()) {
            this.style[`--color-${i + 1}--light`] = color.light;
            this.style[`--color-${i + 1}--dark`] = color.dark;
        }
    }
}

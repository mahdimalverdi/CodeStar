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
            description: 'در اولین قدم شما وارد سایت کوئرا بشید و در آزمون ثبت نام کنید',
        },
        {
            event: '۱۳ و ۱۴ آذرماه',
            title: 'آزمون اولیه',
            description: `این آزمون ۶ سوال برای سنجش توان برنامه نویسی و خلاقیت شما در حل مسئله داره و به صورت مسابقه در سایت کوئرا برگزار میشه و ۲ سوال را تنها بهزبان Java میتوانید پاسخ دهید :)`,
        },
        {
            event: 'از ۱۵ آذر',
            title: 'مصاحبه',
            description: `بر اساس امتیاز مسابقه و همچنین اصولی بودن و تمیز بودن کد‌های ارسالی در مسابقه، با نفرات برتر برای هماهنگی زمان مصاحبۀ دورۀ کارآموزی تماس میگیریم، مصاحبۀ اصلی به صورت ویدیو کنفرانس هست.`,
        },
        {
            event: '۱ اسفند',
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

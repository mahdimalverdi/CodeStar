import {Component} from '@angular/core';

@Component({
    selector: 'app-requirements',
    templateUrl: './requirements.component.html',
    styleUrls: ['./requirements.component.scss'],
})
export class RequirementsComponent {
    public requirements: string [] = [
        'دانشجوی کارشناسی رشتۀ مهندسی کامپیوتر یا علوم کامپیوتر',
        'کسب نمرۀ قبولی در درس برنامه‌سازی پیشرفته (Advanced Programming)',
        'وقت کافی در طول دوره (از اول اسفند تا آخر اردیبهشت)، ساعت ۱۷ تا ۲۰:۳۰ شنبه تا چهارشنبه',
        'اشتیاق برای سر و کله زدن با چالش‌های فنی',
        'لذت بردن از کار تیمی و یادگیری مهارت‌های نرم',
    ];
    
    public extras: string  [ ] = [
        'آشنایی با ساختمان داده‌ها و الگوریتم‌ها (Data Structures & Algorithms)',
        'آشنایی با پایگاه داده (Database)',
    
    ];
}

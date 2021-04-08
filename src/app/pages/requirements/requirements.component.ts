import {Component} from '@angular/core';

@Component({
    selector: 'app-requirements',
    templateUrl: './requirements.component.html',
    styleUrls: ['./requirements.component.scss'],
})
export class RequirementsComponent {
    public requirements: string[] = [
        'دانشجوی کارشناسی رشتۀ مهندسی کامپیوتر یا علوم کامپیوتر',
        'گذراندن درس برنامه‌سازی پیشرفته (Advanced Programming)',
        'آشنایی با HTML و CSS و JavaScript (دورۀ Front-End)',
        'وقت کافی در طول دوره (مرداد و شهریور ۱۴۰۰)، ساعت ۱۰ صبح تا ۶ بعد از ظهر شنبه تا چهارشنبه',
        'اشتیاق برای سر و کله زدن با چالش‌های فنی',
        'لذت بردن از کار تیمی و یادگیری مهارت‌های نرم',
    ];
    
    public extras: string[] = [
        'آشنایی با ساختمان داده‌ها و الگوریتم‌ها (Data Structures & Algorithms)',
        'آشنایی با پایگاه داده (Database)',
    ];
}

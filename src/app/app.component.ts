import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'کداستار';

  constructor(private meta: Meta) {
    const description = ` برنامه‌ی دوره‌ی کارآموزی امسال به خاطر شرایط خاصی که ویروس کرونا ایجاد کرده
      جوری طراحی شده تا بدون نگرانی، بتونین از خونه و به صورت دورکاری شرکت کنین
      بنابراین در این دوره کارگاه‌های آموزشی، صحبت و مشورت با مربی و کار با هم
      تیمی‌ها از طریق ویدیو کنفرانس انجام میشه. همچنین pair programming یکی از
      بخش‌های مهم کارآموزی هست که تاثیر قابل توجهی در یادگیری مهارت‌های
      برنامه‌نویسی داره و از طریق screen share انجام میشه.`;
    this.meta.addTags([
      {
        name: 'description', content: description
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'keywords', content: 'کداستار, CodeStar, Code-Star, Programming, intership, کارآموزی, مهیمن, مجازی' },
      { name: 'og:url', content: 'http://code-star.ir/' },
      { name: 'og:title', content: 'صفحه اصلی' },
      { name: 'og:site_name', content: 'کداستار' },
      { name: 'og:description', content: description },
      { name: 'og:image', content: 'http://code-star.ir/assets/logo-light.png' }
    ], true);
  }
}

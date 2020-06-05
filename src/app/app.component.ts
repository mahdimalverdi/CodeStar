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
    const description = `کُداِستار، دوره‌ی کارآموزیِ تابستانه‌ی آکادمی ستاره هست، این دوره جوری طراحی شده که مهارت های فنی و همچنین مهارت‌های نرم دانشجو‌های رشته مهندسی و علوم کامپیوتر رو رشد بده و یک تجربه‌ی منحصر به فرد از یادگیری تکنولوژی‌های متنوع و کار تیمی رو برای شما فراهم کنه. توی این دوره علاوه بر کارگاه‌ها و آموزش‌های فشرده‌ی مربی‌های آکادمی، با مسائل واقعی صنعت دست و پنجه نرم می‌کنین.`;
    this.meta.addTags([
      {
        name: 'description', content: description
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'keywords', content: 'کداستار, CodeStar, Code-Star, Programming, intership, کارآموزی, مهیمن, مجازی, کد استار' },
      { name: 'og:url', content: 'http://code-star.ir/' },
      { name: 'og:title', content: 'کارآموزی کداستار' },
      { name: 'og:site_name', content: 'کداستار' },
      { name: 'og:description', content: description },
      { name: 'og:image', content: 'http://code-star.ir/assets/logo-light-orginal.png' }
    ], true);
  }
}

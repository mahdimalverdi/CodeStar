import {Component} from '@angular/core';
import {routeAnimation} from './route-animation';
import {NavigationEnd, Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [routeAnimation],
})
export class AppComponent {
    constructor(private router: Router, private meta: Meta, private titleService: Title) {
        router.events.subscribe((e) => {
                if (e instanceof NavigationEnd) {
                    const url = (e as NavigationEnd).urlAfterRedirects;
                    
                    if (!['/', '/benefits'].includes(url)) {
                        meta.removeTag('name="theme-color"');
                        meta.addTag({name: 'theme-color', content: '#fafafa'}, true);
                    }
                    
                    const title = 'کداستار';
                    
                    let titleSuffix;
                    switch (url) {
                        case    '/benefits' :
                            titleSuffix = 'مزایا';
                            break;
                        case    '/technologies' :
                            titleSuffix = 'فناوری‌ها';
                            break;
                        case    '/requirements' :
                            titleSuffix = 'پیش‌نیازها';
                            break;
                        case    '/timeline' :
                            titleSuffix = 'زمان‌بندی';
                            break;
                        default:
                            titleSuffix = '';
                    }
                    
                    if (titleSuffix)
                        titleService.setTitle(`${title} - ${titleSuffix}`);
                    else
                        titleService.setTitle(title);
                }
            },
        );
    }
}

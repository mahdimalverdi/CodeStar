import {Component} from '@angular/core';
import {routeAnimation} from './route-animation';
import {NavigationEnd, Router} from '@angular/router';
import {Meta} from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [routeAnimation],
})
export class AppComponent {
    constructor(private router: Router, private meta: Meta) {
        router.events.subscribe((e) => {
                if (e instanceof NavigationEnd) {
                    const url = (e as NavigationEnd).urlAfterRedirects;
                    
                    if (!['/Home', '/Benefits'].includes(url)) {
                        this.meta.removeTag('name="theme-color"');
                        this.meta.addTag({name: 'theme-color', content: '#fafafa'}, true);
                    }
                }
            },
        );
    }
}

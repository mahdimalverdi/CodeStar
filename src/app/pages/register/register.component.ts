import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import colors from '../../utils/colors';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements AfterViewInit {
    @ViewChild('registerRef') registerRef: ElementRef;
    
    public style = {
        '--color-frontend--light': colors.frontend.light,
        '--color-frontend--dark': colors.frontend.dark,
        '--color-software--light': colors.software.light,
        '--color-software--dark': colors.software.dark,
    };
    
    private register: HTMLElement;
    
    private frontendHoverClassName = 'frontend-hover';
    private softwareHoverClassName = 'software-hover';
    
    public ngAfterViewInit() {
        this.register = this.registerRef.nativeElement as HTMLElement;
    }
    
    public hoverHandler(frontend: boolean, enable: boolean) {
        const className = frontend ? this.frontendHoverClassName : this.softwareHoverClassName;
        
        if (enable)
            this.register.classList.add(className);
        else
            this.register.classList.remove(className);
    }
}

import {NgModule} from '@angular/core';
import {DefaultUrlSerializer, RouterModule, Routes, UrlSerializer, UrlTree} from '@angular/router';

class LowerCaseUrlSerializer extends DefaultUrlSerializer {
    parse(url: string): UrlTree {
        return super.parse(url.toLowerCase());
    }
}

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
        data: {animation: 'home'},
    },
    {
        path: 'technologies',
        loadChildren: () => import('./pages/technologies/technologies.module').then(m => m.TechnologiesModule),
        data: {animation: 'technologies'},
    },
    {
        path: 'benefits',
        loadChildren: () => import('./pages/benefits/benefits.module').then(m => m.BenefitsModule),
        data: {animation: 'benefits'},
    },
    {
        path: 'requirements',
        loadChildren: () => import('./pages/requirements/requirements.module').then(m => m.RequirementsModule),
        data: {animation: 'requirements'},
    },
    {
        path: 'timeline',
        loadChildren: () => import('./pages/timeline/timeline.module').then(m => m.TimelineModule),
        data: {animation: 'timeline'},
    },
    {
        path: 'Register',
        loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule),
        data: {animation: 'RegisterPage'},
    },
    {path: '**', redirectTo: '/'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        initialNavigation: 'enabled',
    })],
    exports: [RouterModule],
    providers: [
        {
            provide: UrlSerializer,
            useClass: LowerCaseUrlSerializer,
        }],
})
export class AppRoutingModule {
}

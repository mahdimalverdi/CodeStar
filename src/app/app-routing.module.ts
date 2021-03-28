import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: '/Home', pathMatch: 'full'},
    {
        path: 'Home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
        data: {animation: 'HomePage'},
    },
    {
        path: 'Technologies',
        loadChildren: () => import('./pages/technologies/technologies.module').then(m => m.TechnologiesModule),
        data: {animation: 'TechnologiesPage'},
    },
    {
        path: 'Benefits',
        loadChildren: () => import('./pages/benefits/benefits.module').then(m => m.BenefitsModule),
        data: {animation: 'BenefitsPage'},
    },
    {
        path: 'Requirements',
        loadChildren: () => import('./pages/requirements/requirements.module').then(m => m.RequirementsModule),
        data: {animation: 'RequirementsPage'},
    },
    {
        path: 'Timeline',
        loadChildren: () => import('./pages/timeline/timeline.module').then(m => m.TimelineModule),
        data: {animation: 'TimelinePage'},
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        initialNavigation: 'enabled',
    })],
    exports: [RouterModule],
})
export class AppRoutingModule {
}

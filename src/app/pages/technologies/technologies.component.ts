import {Component} from '@angular/core';

interface Technology {
    title: string;
    image: string;
}

@Component({
    selector: 'app-technologies',
    templateUrl: './technologies.component.html',
    styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent {
    public imagesPath = '../../../assets/technologies/';
    
    public technologyGroups: { title: string; technologies: Technology[] }[] = [
        {
            title: 'فناوری‌های مربوط به دورۀ فرانت‌اند',
            technologies: [
                {
                    title: 'npm',
                    image: 'npm.svg',
                },
                {
                    title: 'Angular',
                    image: 'angular.svg',
                },
                {
                    title: 'Material',
                    image: 'material.svg',
                },
                {
                    title: 'TypeScript',
                    image: 'typescript.svg',
                },
                {
                    title: 'SASS',
                    image: 'sass.svg',
                },
                {
                    title: 'Jest',
                    image: 'jest.svg',
                },
                {
                    title: 'Highcharts',
                    image: 'highcharts.svg',
                },
                {
                    title: 'Ogma',
                    image: 'ogma.svg',
                },
            ],
        },
        {
            title: 'فناوری‌های مربوط به دورۀ مهندسی نرم‌افزار',
            technologies: [
                {
                    title: 'Java',
                    image: 'java.svg',
                },
                {
                    title: 'C#',
                    image: 'c-sharp.svg',
                },
                {
                    title: 'NuGet',
                    image: 'nuget.svg',
                },
                {
                    title: 'ASP.NET Core',
                    image: 'asp.svg',
                },
                {
                    title: 'Elasticsearch',
                    image: 'elasticsearch.svg',
                },
                {
                    title: 'Kibana',
                    image: 'kibana.svg',
                },
                {
                    title: 'APM',
                    image: 'apm.svg',
                },
                {
                    title: 'Microsoft SQL Server',
                    image: 'microsoft-sql-server.svg',
                },
            ],
        },
    ];
    
    public concepts: string [] = [
        'Advanced Object Oriented Programming',
        'SOLID Principles',
        'Test Driven Development',
        'Continuous Integration',
        'Continuous Deployment',
        'Version Control',
        'GitHub Actions',
        'JavaScript Object Notation',
        'Application Profiling',
        'Unit Testing',
        'Integration Testing',
        'Load Testing',
        'SQL\nNoSQL',
        'High Availability Databases',
        'Pair Programming',
    ];
}

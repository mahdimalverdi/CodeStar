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
    public technologies: Technology[] = [
        {
            title: 'Java',
            image: '../../../assets/technologies/java.png',
        },
        {
            title: 'C#',
            image: '../../../assets/technologies/c-sharp.png',
        },
        {
            title: 'Asp.Net Core',
            image: '../../../assets/technologies/asp.png',
        },
        {
            title: 'Angular',
            image: '../../../assets/technologies/angular.png',
        },
        {
            title: 'TypeScript',
            image: '../../../assets/technologies/type-script.png',
        },
        {
            title: 'SASS',
            image: '../../../assets/technologies/sass.png',
        },
        {
            title: 'Elasticsearch',
            image: '../../../assets/technologies/elasticsearch.png',
        },
        {
            title: 'Kibana',
            image: '../../../assets/technologies/kibana.png',
        },
        {
            title: 'APM',
            image: '../../../assets/technologies/apm.png',
        },
        {
            title: 'Microsoft SQL server',
            image: '../../../assets/technologies/sql-server.png',
        },
    ];
    
    public concepts: string [] = [
        'Advanced Object Oriented Programming',
        'SOLID principles',
        'Test Driven Development',
        'Application Profiling',
        'Unit Testing, Integration Testing, Load Testing',
        'SQL, NoSQL, High Availability Databases',
    ];
}

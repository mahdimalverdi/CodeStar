import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ComputerSpaceshipComponent} from './computer-spaceship/computer-spaceship.component';
import { VirusComponent } from './virus/virus.component';
import { GraduationCapComponent } from './graduation-cap/graduation-cap.component';
import { WorkingWithComputerComponent } from './working-with-computer/working-with-computer.component';

@NgModule({
    declarations: [ComputerSpaceshipComponent, VirusComponent, GraduationCapComponent, WorkingWithComputerComponent],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [ComputerSpaceshipComponent, VirusComponent, GraduationCapComponent, WorkingWithComputerComponent],
})
export class IllustrationsModule {
}

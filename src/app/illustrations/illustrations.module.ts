import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ComputerSpaceshipComponent} from './computer-spaceship/computer-spaceship.component';
import { VirusComponent } from './virus/virus.component';
import { GraduationCapComponent } from './graduation-cap/graduation-cap.component';
import { WorkingWithComputerComponent } from './working-with-computer/working-with-computer.component';
import { AparatComponent } from './aparat/aparat.component';
import { InstagramComponent } from './instagram/instagram.component';
import { TelegramComponent } from './telegram/telegram.component';
import { FrontendComponent } from './frontend/frontend.component';
import { SoftwareComponent } from './software/software.component';

@NgModule({
    declarations: [ComputerSpaceshipComponent, VirusComponent, GraduationCapComponent, WorkingWithComputerComponent, AparatComponent, InstagramComponent, TelegramComponent, FrontendComponent, SoftwareComponent],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [ComputerSpaceshipComponent, VirusComponent, GraduationCapComponent, WorkingWithComputerComponent, AparatComponent, InstagramComponent, TelegramComponent, FrontendComponent, SoftwareComponent],
})
export class IllustrationsModule {
}

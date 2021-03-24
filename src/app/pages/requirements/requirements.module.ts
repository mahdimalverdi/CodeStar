import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequirementsRoutingModule } from './requirements-routing.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';
import { RequirementsComponent } from './requirements.component';


@NgModule({
  declarations: [
    RequirementsComponent
  ],
  imports: [
    CommonModule,
    RequirementsRoutingModule,
    ToolbarModule,
    FooterModule
  ]
})
export class RequirementsModule { }

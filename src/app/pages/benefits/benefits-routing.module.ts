import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenefitsComponent } from './benefits.component';

const routes: Routes = [
  {
    path: '',
    component: BenefitsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BenefitsRoutingModule { }

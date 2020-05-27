import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { BackgroundAnimationComponent } from './background-animation/background-animation.component';
import { HeaderComponent } from './home-page/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { WhatIsCodeStarComponent } from './home-page/what-is-code-star/what-is-code-star.component';
import { TechnologiesComponent } from './home-page/technologies/technologies.component';
import { DescriptionComponent } from './home-page/description/description.component';
import { RequirementsComponent } from './home-page/requirements/requirements.component';
import { TimeLineComponent } from './home-page/time-line/time-line.component';
import { ContactUsComponent } from './home-page/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BackgroundAnimationComponent,
    HeaderComponent,
    WhatIsCodeStarComponent,
    TechnologiesComponent,
    DescriptionComponent,
    RequirementsComponent,
    TimeLineComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

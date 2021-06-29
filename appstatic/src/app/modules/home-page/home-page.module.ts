import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from 'src/app/shared-components/header/header.component';
import { HomeAnalyticsComponent } from './components/home-analytics/home-analytics.component';
import { AnalyticDetailComponent } from './components/analytic-detail/analytic-detail.component';
import { ServicesProvidedComponent } from './components/services-provided/services-provided.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    HomeAnalyticsComponent,
    AnalyticDetailComponent,
    ServicesProvidedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    HomeAnalyticsComponent
  ]
})
export class HomePageModule { }

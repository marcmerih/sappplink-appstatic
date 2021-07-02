import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from 'src/app/shared-components/header/header.component';
import { HomeAnalyticsComponent } from './components/home-analytics/home-analytics.component';
import { AnalyticDetailComponent } from './components/analytic-detail/analytic-detail.component';
import { ServicesProvidedComponent } from './components/services-provided/services-provided.component';
import { NewsComponent } from './components/news/news.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { JoinTeamComponent } from './components/join-team/join-team.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    HomeAnalyticsComponent,
    AnalyticDetailComponent,
    ServicesProvidedComponent,
    NewsComponent,
    NewsItemComponent,
    JoinTeamComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HomePageComponent,
    HomeAnalyticsComponent,
    HeaderComponent,
    NewsComponent,
    NewsItemComponent
  ]
})
export class HomePageModule { }

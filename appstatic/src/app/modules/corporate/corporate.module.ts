import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagementPageComponent } from './management-page/management-page.component';
import { ManagementSectionComponent } from './components/management-section/management-section.component';
import { ManagementCardComponent } from './components/management-card/management-card.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { GoalsPageComponent } from './goals-page/goals-page.component';
import { InitiativesPageComponent } from './initiatives-page/initiatives-page.component';
import { HistorySectionComponent } from './components/history-section/history-section.component';
import { GoalsSectionComponent } from './components/goals-section/goals-section.component';
import { NewsComponent } from '../home-page/components/news/news.component';
import { NewsItemComponent } from '../home-page/components/news-item/news-item.component';
import { HomePageModule } from '../home-page/home-page.module';

@NgModule({
  declarations: [
    AboutPageComponent,
    AboutSectionComponent,
    ManagementPageComponent,
    ManagementSectionComponent,
    ManagementCardComponent,
    HistoryPageComponent,
    GoalsPageComponent,
    InitiativesPageComponent,
    HistorySectionComponent,
    GoalsSectionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomePageModule
  ],
  exports: []
})
export class CorporateModule { }

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
    HistorySectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class CorporateModule { }

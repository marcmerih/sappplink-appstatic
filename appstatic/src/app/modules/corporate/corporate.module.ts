import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagementPageComponent } from './management-page/management-page.component';
import { ManagementSectionComponent } from './components/management-section/management-section.component';
import { ManagementCardComponent } from './components/management-card/management-card.component';
import { HistoryPageComponent } from './history-page/history-page.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    AboutSectionComponent,
    ManagementPageComponent,
    ManagementSectionComponent,
    ManagementCardComponent,
    HistoryPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class CorporateModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from 'src/app/shared-components/header/header.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }

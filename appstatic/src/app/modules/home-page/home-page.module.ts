import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedComponentsModule } from '../../shared-components/shared-components.module';
import { HeaderComponent } from 'src/app/shared-components/header/header.component';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }

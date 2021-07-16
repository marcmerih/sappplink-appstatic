import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home-page/home-page/home-page.component';
import { AboutPageComponent } from './modules/corporate/about-page/about-page.component';
import { ManagementPageComponent } from './modules/corporate/management-page/management-page.component';
import { GoalsPageComponent } from './modules/corporate/goals-page/goals-page.component';
import { InitiativesPageComponent } from './modules/corporate/initiatives-page/initiatives-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'management', component: ManagementPageComponent },
  { path: 'organizational-goals', component: GoalsPageComponent },
  { path: 'initiatives', component: InitiativesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

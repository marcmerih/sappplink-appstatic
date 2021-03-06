import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { TranslateService } from 'src/app/services/translate.service';
import * as AppConstants from '../../app.constants';
import { MatDialog } from '@angular/material/dialog';
import { LanguagePopupComponent } from '../language-popup/language-popup.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public en: string = '';
  public tr: string = '';
  public fr: string = '';
  public it: string = '';

  public HOME = AppConstants.Routes.HOME;
  public ABOUT = AppConstants.Routes.ABOUT;
  public MANAGEMENT = AppConstants.Routes.MANAGEMENT;
  public GOALS = AppConstants.Routes.GOALS;
  public INITIATIVES = AppConstants.Routes.INITIATIVES;
  public YACHTING = AppConstants.Routes.YACHTING;
  public TESTIMONIALS = AppConstants.Routes.TESTIMONIALS;
  public ASSOCIATES = AppConstants.Routes.ASSOCIATES;
  public PROJECTS = AppConstants.Routes.PROJECTS;
  public CONTACT = AppConstants.Routes.CONTACT;
  constructor(private navigationService: NavigationService, 
    private translateService: TranslateService,
    private dialog: MatDialog) {
    this.en = translateService.en;
    this.tr = translateService.tr;
    this.fr = translateService.fr;
    this.it = translateService.it;
  }

  ngOnInit(): void {
  }

  navigateTo(url: string): void {
    this.navigationService.routeTo(url);
  }

  changeLanguage(language: string) {
    const data = {
      lang: language
    };
    this.dialog.open(LanguagePopupComponent);
  }

}

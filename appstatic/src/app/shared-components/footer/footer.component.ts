import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { TranslateService } from 'src/app/services/translate.service';

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
  constructor(private navigationService: NavigationService, private translateService: TranslateService) {
    this.en = translateService.en;
    this.tr = translateService.tr;
    this.fr = translateService.fr;
    this.it = translateService.it;
  }

  ngOnInit(): void {
  }

  navigateToCorporate(): void {
    this.navigationService.routeTo('about');
  }

  changeLanguage(language: string) {
    return language;
  }

}

import { Component, OnInit, HostListener } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import * as AppConstants from '../../app.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navBarFixed = false;
  public HOME = AppConstants.Routes.HOME;
  public ABOUT = AppConstants.Routes.ABOUT;
  public MANAGEMENT = AppConstants.Routes.MANAGEMENT;
  public HISTORY = AppConstants.Routes.HISTORY;
  public GOALS = AppConstants.Routes.GOALS;
  public INITIATIVES = AppConstants.Routes.INITIATIVES;
  public TESTIMONIALS = AppConstants.Routes.TESTIMONIALS;
  public ASSOCIATES = AppConstants.Routes.ASSOCIATES;
  public PROJECTS = AppConstants.Routes.PROJECTS;
  public CONTACT = AppConstants.Routes.CONTACT;

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 80) {
      this.navBarFixed = true;
    } else {
      this.navBarFixed = false;
    }
  }

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  navigateTo(url: string) {
    this.navigationService.routeTo(url);
  }

  isActive(url: string): string {
    return (this.isActiveUrl(url)) ? 'active' : ''; 
  }

  isActiveUrl(url: string): boolean {
    return this.navigationService.currentUrl === ('/' + url);
  }

  get isCorporateActive() {
    return (this.isActiveUrl(this.ABOUT) || this.isActiveUrl(this.MANAGEMENT) || this.isActiveUrl(this.HISTORY) ||
      this.isActiveUrl(this.GOALS) || this.isActiveUrl(this.INITIATIVES));
  }
}

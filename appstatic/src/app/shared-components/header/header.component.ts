import { Component, OnInit, HostListener } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navBarFixed = false;
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

  navigateToCorporate(): void {
    this.navigationService.routeTo('about');
  }

  navigateToHome(): void {
    this.navigationService.routeTo('home');
  }

  navigateToManagement(): void {
    this.navigationService.routeTo('management');
  }

  navigateToHistory(): void {
    this.navigationService.routeTo('history');
  }
  navigateToGoals(): void {

  }
  navigateToInitiatives(): void {

  }
  navigateToTestimonials(): void {

  }
  navigateToAssociates(): void {

  }
  navigateToProjects(): void {

  }
  navigateToContact(): void {

  }

  isActive(url: string): string {
    console.log(this.navigationService.currentUrl);
    return (this.isActiveUrl(url)) ? 'active' : ''; 
  }

  isActiveUrl(url: string): boolean {
    return this.navigationService.currentUrl === url;
  }

  get isCorporateActive() {
    return (this.isActiveUrl('/about') || this.isActiveUrl('/management') || this.isActiveUrl('/history') ||
      this.isActiveUrl('/goals') || this.isActiveUrl('/initiatives'));
  }
}

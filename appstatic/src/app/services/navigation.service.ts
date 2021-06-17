import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private route: Router) { }

  routeToDefault(): void {
    this.route.navigateByUrl('/home');
  }

  routeTo(url: string): void {
    this.route.navigateByUrl(url);
  }

  get currentUrl():string {
    return this.route.url;
  }

}

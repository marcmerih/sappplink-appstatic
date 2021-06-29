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

  constructor() { }

  ngOnInit(): void {
  }
}

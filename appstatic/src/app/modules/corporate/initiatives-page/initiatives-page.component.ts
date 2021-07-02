import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../../home-page/models/news';

@Component({
  selector: 'app-initiatives-page',
  templateUrl: './initiatives-page.component.html',
  styleUrls: ['./initiatives-page.component.scss']
})
export class InitiativesPageComponent implements OnInit {
  initiatives: NewsItem[] = [];
  constructor() { }

  ngOnInit(): void {
    const plantSequoias: NewsItem = {
      backgroundImg: 'assets/sequoia-plant@2x.png',
      title: '#PlantSequoias Initiative',
      isNews: false,
      isInitiative: true,
      initiativeNumber: 1256,
      initiativeSubtitle: 'Planted'
    }
    this.initiatives.push(plantSequoias);
  }

}

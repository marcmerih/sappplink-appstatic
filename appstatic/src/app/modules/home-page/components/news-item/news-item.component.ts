import { Component, OnInit, Input, Output } from '@angular/core';
import { NewsItem } from '../../models/news';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
  @Input() item: NewsItem | undefined;
  @Output() openItem = new EventEmitter<NewsItem>();
  constructor() { }

  ngOnInit(): void {
  }

  get isInitiative() {
    return this.item?.isInitiative;
  }

  get itemBackground() {
    return this.item?.backgroundImg;
  }

  get itemTitle() {
    if (this.item?.title && this.item?.title.length > 81) {
      return (this.item?.title.slice(0,81) + '...')
    } else if (this.item?.title && this.item?.title.length <= 81) {
      return this.item?.title;
    }
    return '';
  }

  get itemSubtitle() {
    return this.item?.initiativeSubtitle;
  }

  get itemInitiativeNumber() {
    return this.item?.initiativeNumber;
  }

  get itemViews() {
    return this.item?.numberOfViews;
  }

  get itemNews() {
    return this.item?.isNews;
  }

  get itemDate() {
    return this.item?.date;
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { NewsItem } from '../../models/news';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
  @Input() item: NewsItem | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  get itemBackground() {
    return this.item?.backgroundImg;
  }

  get itemTitle() {
    return this.item?.title
  }

  get itemViews() {
    return this.item?.numberOfViews
  }

  get itemNews() {
    return this.item?.isNews
  }

  get itemDate() {
    return this.item?.date
  }

}

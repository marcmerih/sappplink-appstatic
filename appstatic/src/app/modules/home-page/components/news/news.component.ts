import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../../models/news';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [DatePipe]
})
export class NewsComponent implements OnInit {
  news: NewsItem[] = [];

  constructor(private date: DatePipe) {
    const myDate = new Date();
    const mockNewsItem: NewsItem = {
      backgroundImg: 'assets/iphone-news@2x.png',
      title: 'Sapplink Founder Marc Atasoy releases ‘Goalkik’ for iOS and Android…',
      isNews: true,
      date: this.date.transform(myDate, 'yyyy-MM-dd'),
      numberOfViews: 12
    }
    this.news.push(mockNewsItem);

    const mockNewsItem2: NewsItem = {
      backgroundImg: 'assets/iphone-news@2x.png',
      title: 'Best Practices for Programming in an Enterprise Application Setting…',
      isNews: false,
      date: this.date.transform(myDate, 'yyyy-MM-dd'),
      numberOfViews: 128
    }
    this.news.push(mockNewsItem2);
  }

  ngOnInit(): void {
  }

}

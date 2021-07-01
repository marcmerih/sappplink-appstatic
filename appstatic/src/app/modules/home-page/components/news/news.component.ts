import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../../models/news';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [DatePipe]
})
export class NewsComponent implements OnInit {
  news: NewsItem[] = [];

  constructor(private date: DatePipe, private router: Router) {
    const myDate = new Date();
    const mockNewsItem: NewsItem = {
      backgroundImg: 'assets/iphone-news@2x.png',
      title: 'Sapplink Founder Marc Atasoy releases ‘Goalkik’ for iOS and Android now available on both devices',
      isNews: true,
      date: this.date.transform(myDate, 'yyyy-MM-dd'),
      numberOfViews: 12
    }
    this.news.push(mockNewsItem);

    const mockNewsItem2: NewsItem = {
      backgroundImg: 'assets/iphone-news@2x.png',
      title: 'Best Practices for Programming in an Enterprise Application Setting',
      isNews: false,
      date: this.date.transform(myDate, 'yyyy-MM-dd'),
      numberOfViews: 128
    }
    this.news.push(mockNewsItem2);
  }

  ngOnInit(): void {
  }

  openItem($event: NewsItem) {
    // this.router.navigateByUrl(`/news/${$event.uid}/${$event.title}`, { state: { $event } });
  }

  get newsList() {
    return this.news.slice(0,2);
  }

}

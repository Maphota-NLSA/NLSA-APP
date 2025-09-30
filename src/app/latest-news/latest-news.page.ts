import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news_services/news.service';
import { Router } from '@angular/router';
import { ActivityLoggerService } from '../App-services/activity-logger.service';
import { LogService } from '../App-services/log.service';


@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.page.html',
  styleUrls: ['./latest-news.page.scss'],
  standalone: false,
})
export class LatestNewsPage implements OnInit {
 
newsItems: any[] = [];

  constructor(private newsService: NewsService, private router: Router, private  logger:ActivityLoggerService, private logService: LogService) {}
  openNewsDetails(id: number) {
  this.router.navigate(['/news-details', id]);
  //this.logger.logActivity('page_view', { page: 'latest-news' });
}

  ngOnInit() {
    this.logService.log('Page viewed','Latest News Page');
    this.newsService.getNews().subscribe((
      data: any[] )=> {
        console.log('News data:', data);
        this.newsItems = data;
      },
      error => {
        console.error('Failed to load news', error);
      }
    );
  }

}

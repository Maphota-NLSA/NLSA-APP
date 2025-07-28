import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news_services/news.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.page.html',
  styleUrls: ['./latest-news.page.scss'],
  standalone: false,
})
export class LatestNewsPage implements OnInit {
 
newsItems: any[] = [];

  constructor(private newsService: NewsService, private router: Router) {}

  openNewsDetails(id: number) {
  this.router.navigate(['/news-details', id]);
}

  ngOnInit() {
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

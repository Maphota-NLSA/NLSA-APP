import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news_services/news.service';

@Component({
  selector: 'app-newsupdate',
  templateUrl: './newsupdate.page.html',
  styleUrls: ['./newsupdate.page.scss'],
  standalone: false,
})
export class NewsupdatePage implements OnInit {

  newsItems: any[] = [];

  constructor(private NewsService: NewsService) {}

  ngOnInit() {
  this.NewsService.getNews().subscribe((
      data: any[] )=> {
        console.log('News data:', data);
        this.newsItems = data;
      },
      error => {
        console.error('Failed to load news', error);
      }
    );

  }

  deleteNews(id: number) {
    if (!confirm('Are you sure you want to delete this news?')) return;

  this.NewsService.deleteNews(id).subscribe({
    next: (res) => {
      console.log(res.message || 'News deleted successfully');
      
    },
    error: (err) => console.error(err)
  });
  }

}

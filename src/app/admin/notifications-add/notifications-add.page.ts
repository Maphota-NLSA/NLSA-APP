import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news_services/news.service';

@Component({
  selector: 'app-notifications-add',
  templateUrl: './notifications-add.page.html',
  styleUrls: ['./notifications-add.page.scss'],
  standalone: false,
})
export class NotificationsAddPage implements OnInit {
 notifications: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
  this.newsService.getnotification().subscribe((
      data: any[] )=> {
        console.log('Notification data:', data);
        this.notifications = data;
      },
      error => {
        console.error('Failed to load news', error);
      }
    );

  }

  deleteNews(id: number) {
    if (!confirm('Are you sure you want to delete this news?')) return;

  this.newsService.deleteNews(id).subscribe({
    next: (res) => {
      console.log(res.message || 'News deleted successfully');
      
    },
    error: (err) => console.error(err)
  });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news_services/news.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivityLoggerService } from '../App-services/activity-logger.service';
import { LogService } from '../App-services/log.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class NewsDetailsComponent  implements OnInit {
newsItem: any;
public formattedStory: string = '';
 
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private logger: ActivityLoggerService, 
    private logService: LogService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id')); 

    if (id) {
      this.newsService.getNewsById(id).subscribe((data) => {
        this.newsItem = data;
        this.formattedStory = this.newsItem.Story.replace(/\n/g, '<br>');
      });
    }

    this.logger.logActivity('page_view', { page: 'latest-news' });
    this.logService.log('Page viewed','News Details Page: ' + id);
  }

}

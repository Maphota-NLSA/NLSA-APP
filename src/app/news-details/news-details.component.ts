import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news_services/news.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

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
    private newsService: NewsService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id')); 

    if (id) {
      this.newsService.getNewsById(id).subscribe((data) => {
        this.newsItem = data;
        this.formattedStory = this.newsItem.Story.replace(/\n/g, '<br>');
      });
    }
  }

}

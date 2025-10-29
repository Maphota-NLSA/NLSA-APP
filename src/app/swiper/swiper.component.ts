import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { HeaderPageModule } from "../header/header.module";
import { LogService } from '../App-services/log.service';
import { NewsService } from '../news_services/news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  imports: [HeaderPageModule,CommonModule],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperComponent  implements OnInit {
  image: any;
  
  constructor( private newsService: NewsService,private logService: LogService) { }

  ngOnInit() {
    //this.logService.log('Page viewed', 'Swiper Component');
    this.newsService.getImage().subscribe((
      data: any )=> {
        this.image = data;
        console.log(data.Image);
    });
     
  }

}

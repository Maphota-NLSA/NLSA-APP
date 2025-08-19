import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { HeaderPageModule } from "../header/header.module";
import { LogService } from '../App-services/log.service';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  imports: [HeaderPageModule],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperComponent  implements OnInit {
  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.log('Page viewed', 'Swiper Component');
  }

}

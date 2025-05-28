import { Component, OnInit } from '@angular/core';
import { HeaderPageModule } from "../header/header.module";

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  imports: [HeaderPageModule],
})
export class SwiperComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

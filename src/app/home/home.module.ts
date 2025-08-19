import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderPageModule } from '../header/header.module';
import { FooterPageModule } from '../footer/footer.module';
import { SwiperComponent } from "../swiper/swiper.component";
import { CardsComponent } from "../cards/cards.component";
import { ActivityLoggerService } from '../App-services/activity-logger.service';
import { LogService } from '../App-services/log.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderPageModule,
    FooterPageModule,
    SwiperComponent,
    CardsComponent
],
  declarations: [HomePage],
  providers: [LogService, ActivityLoggerService],
  
})
export class HomePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatestNewsPageRoutingModule } from './latest-news-routing.module';

import { LatestNewsPage } from './latest-news.page';
import { FooterPageModule } from '../footer/footer.module';
import { HeaderPageModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LatestNewsPageRoutingModule,
    FooterPageModule,
    HeaderPageModule,
  ],
  declarations: [LatestNewsPage]
})
export class LatestNewsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeImageUpdatePageRoutingModule } from './home-image-update-routing.module';

import { HomeImageUpdatePage } from './home-image-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeImageUpdatePageRoutingModule
  ],
  declarations: [HomeImageUpdatePage]
})
export class HomeImageUpdatePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsUpdatePageRoutingModule } from './notifications-update-routing.module';

import { NotificationsUpdatePage } from './notifications-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsUpdatePageRoutingModule
  ],
  declarations: [NotificationsUpdatePage]
})
export class NotificationsUpdatePageModule {}

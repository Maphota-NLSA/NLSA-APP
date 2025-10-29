import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsAddPageRoutingModule } from './notifications-add-routing.module';

import { NotificationsAddPage } from './notifications-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsAddPageRoutingModule
  ],
  declarations: [NotificationsAddPage]
})
export class NotificationsAddPageModule {}

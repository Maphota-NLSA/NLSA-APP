import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsupdatePageRoutingModule } from './newsupdate-routing.module';

import { NewsupdatePage } from './newsupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsupdatePageRoutingModule
  ],
  declarations: [NewsupdatePage]
})
export class NewsupdatePageModule {}

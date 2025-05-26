import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutreachPageRoutingModule } from './outreach-routing.module';

import { OutreachPage } from './outreach.page';
import { FooterPageModule } from "../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutreachPageRoutingModule,
    FooterPageModule
],
  declarations: [OutreachPage]
})
export class OutreachPageModule {}

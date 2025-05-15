import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapetownCampusPageRoutingModule } from './capetown-campus-routing.module';

import { CapetownCampusPage } from './capetown-campus.page';
import { HeaderPageModule } from '../header/header.module';
import { FooterPageModule } from '../footer/footer.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapetownCampusPageRoutingModule,
    HeaderPageModule,
    FooterPageModule
  ],
  declarations:[CapetownCampusPage]
})
export class CapetownCampusPageModule {}

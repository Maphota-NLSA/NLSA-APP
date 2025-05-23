import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationAccessPageRoutingModule } from './information-access-routing.module';

import { InformationAccessPage } from './information-access.page';
import { HeaderPageModule } from '../header/header.module';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationAccessPageRoutingModule,
    HeaderPageModule,
    FooterPageModule,
  ],
  declarations: [InformationAccessPage]
})
export class InformationAccessPageModule {}

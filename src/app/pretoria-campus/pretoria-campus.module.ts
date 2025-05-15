import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PretoriaCampusPageRoutingModule } from './pretoria-campus-routing.module';

import { PretoriaCampusPage } from './pretoria-campus.page';
import { HeaderPageModule } from '../header/header.module';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PretoriaCampusPageRoutingModule,
    HeaderPageModule,
    FooterPageModule 
  ],
  declarations: [PretoriaCampusPage]

})
export class PretoriaCampusPageModule {}

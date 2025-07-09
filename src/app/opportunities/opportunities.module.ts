import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpportunitiesPageRoutingModule } from './opportunities-routing.module';

import { OpportunitiesPage } from './opportunities.page';
import { HeaderPageModule } from '../header/header.module';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpportunitiesPageRoutingModule,
    HeaderPageModule,
    FooterPageModule,
  ],
  declarations: [OpportunitiesPage]
})
export class OpportunitiesPageModule {}

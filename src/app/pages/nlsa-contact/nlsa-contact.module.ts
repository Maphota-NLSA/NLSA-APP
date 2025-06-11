import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NlsaContactPageRoutingModule } from './nlsa-contact-routing.module';
import { NlsaContactPage } from './nlsa-contact.page';
import { FooterPageModule } from 'src/app/footer/footer.module';
import { HeaderPageModule } from 'src/app/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NlsaContactPageRoutingModule,
    HeaderPageModule,
    FooterPageModule,

  ],
  declarations: [NlsaContactPage],
  
})
export class NlsaContactPageModule {}

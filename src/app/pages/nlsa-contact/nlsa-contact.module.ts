import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NlsaContactPageRoutingModule } from './nlsa-contact-routing.module';

import { NlsaContactPage } from './nlsa-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NlsaContactPageRoutingModule
  ],
  declarations: [NlsaContactPage]
})
export class NlsaContactPageModule {}

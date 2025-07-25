import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NlsaContactPageRoutingModule } from './nlsa-contact-routing.module';
import { NlsaContactPage } from './nlsa-contact.page';
import { FooterPageModule } from 'src/app/footer/footer.module';
import { HeaderPageModule } from 'src/app/header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactformService } from 'src/app/App-services/contactform.service';
import { ContactFormClass } from 'src/app/contact-form-class';

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

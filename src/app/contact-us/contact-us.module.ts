import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactUsPageRoutingModule } from './contact-us-routing.module';

import { ContactUsPage } from './contact-us.page';
import { HeaderPageModule } from "../header/header.module";
import { FooterPageModule } from "../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactUsPageRoutingModule,
    HeaderPageModule,
    FooterPageModule
],
  declarations: [ContactUsPage]
})
export class ContactUsPageModule {}

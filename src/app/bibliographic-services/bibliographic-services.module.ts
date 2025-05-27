import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BibliographicServicesPageRoutingModule } from './bibliographic-services-routing.module';

import { BibliographicServicesPage } from './bibliographic-services.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterPageModule } from "../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    BibliographicServicesPageRoutingModule,
    FooterPageModule
],
  declarations: [BibliographicServicesPage]
})
export class BibliographicServicesPageModule {}

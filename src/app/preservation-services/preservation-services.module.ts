import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreservationServicesPageRoutingModule } from './preservation-services-routing.module';

import { PreservationServicesPage } from './preservation-services.page';
import { FooterPageModule } from "../footer/footer.module";
import { HeaderPageModule } from "../header/header.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreservationServicesPageRoutingModule,
    FooterPageModule,
    HeaderPageModule
],
  declarations: [PreservationServicesPage]
})
export class PreservationServicesPageModule {}

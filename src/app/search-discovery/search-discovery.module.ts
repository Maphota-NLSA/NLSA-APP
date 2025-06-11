import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SearchDiscoveryPageRoutingModule } from './search-discovery-routing.module';
import { SearchDiscoveryPage } from './search-discovery.page';

import { HeaderPageModule } from '../header/header.module';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchDiscoveryPageRoutingModule,
    HeaderPageModule,
    FooterPageModule,
  ],
  declarations: [SearchDiscoveryPage]
})
export class SearchDiscoveryPageModule {

  
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsingLibraryPageRoutingModule } from './using-library-routing.module';

import { UsingLibraryPage } from './using-library.page';
import { FooterPageModule } from 'src/app/footer/footer.module';
import { HeaderPageModule } from 'src/app/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsingLibraryPageRoutingModule,
    FooterPageModule,
    HeaderPageModule,
  ],
  declarations: [UsingLibraryPage]
})
export class UsingLibraryPageModule {}

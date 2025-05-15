import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsingLibraryPageRoutingModule } from './using-library-routing.module';

import { UsingLibraryPage } from './using-library.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsingLibraryPageRoutingModule
  ],
  declarations: [UsingLibraryPage]
})
export class UsingLibraryPageModule {}

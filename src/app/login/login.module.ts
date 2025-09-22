import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'; 

import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { HeaderPageModule } from '../header/header.module';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,        // ✅ Added here
    LoginPageRoutingModule,
    HeaderPageModule,
    FooterPageModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}

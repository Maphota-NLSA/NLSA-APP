import { HttpClient } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  data: any;
  
  constructor(
    private router: Router,
    private menuCtrl: MenuController
  ) {
    // this.http.get('http://127.0.0.1:8000/api/contactform/add').subscribe(data => {
    //   this.data.push(data);
    //   console.log(this.data);
    // }, error => console.error(error));
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }


  closeMenu() {
    this.menuCtrl.isOpen('main-menu').then(isOpen => {
      if (isOpen) {
        this.menuCtrl.close('main-menu');
      }
    });
  }
}

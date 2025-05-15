import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(
    private router: Router,
    private menuCtrl: MenuController
  ) {}

  openLink(url: string) {
    window.open(url, '_blank');
  }

  navigateToHome() {
    this.router.navigate(['/home']);
    this.closeMenu();
  }

  navigateToPretoria() {
    this.router.navigate(['/pretoria-campus']);
    this.closeMenu();
  }

  navigateToCapeTown() {
    this.router.navigate(['/capetown-campus']);
    this.closeMenu();
  }

  closeMenu() {
    this.menuCtrl.isOpen('main-menu').then(isOpen => {
      if (isOpen) {
        this.menuCtrl.close('main-menu');
      }
    });
  }
}

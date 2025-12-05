import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  // 🔐 Logout function
  logout() {
    // Clear saved admin session (if any)
    localStorage.removeItem('adminLoggedIn');

    // Redirect to login page
    this.navCtrl.navigateRoot('/login');
  }

}

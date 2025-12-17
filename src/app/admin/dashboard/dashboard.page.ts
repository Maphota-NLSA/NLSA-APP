import { Component, OnInit } from '@angular/core';
// Update the import path if log.service.ts is located elsewhere, for example:
import { LogService } from '../../App-services/log.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.log('Page viewed','Administartor dashboard Page');
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

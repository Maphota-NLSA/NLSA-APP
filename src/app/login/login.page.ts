import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  username = '';
  password = '';

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  login() {
    this.http.post('http://127.0.0.1:8000/api/admin/login', {
      username: this.username,
      password: this.password
    }).subscribe(
      async (res: any) => {
        const toast = await this.toastCtrl.create({
          message: res.message,
          duration: 2000,
          color: 'success'
        });
        toast.present();

        // Navigate to admin dashboard after successful login "testing"
        this.navCtrl.navigateForward('/opportunities');
      },
      async err => {
        const toast = await this.toastCtrl.create({
          message: 'Invalid username or password',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      }
    );
  }
}

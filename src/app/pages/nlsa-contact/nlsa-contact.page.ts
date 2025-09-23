import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-nlsa-contact',
  templateUrl: './nlsa-contact.page.html',
  styleUrls: ['./nlsa-contact.page.scss'],
  standalone: false,
})
export class NlsaContactPage implements OnInit {

  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(
    private http: HttpClient,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  async sendMessage() {
    if (!this.contact.name || !this.contact.email || !this.contact.subject || !this.contact.message) {
      const toast = await this.toastCtrl.create({
        message: 'Please fill out all fields.',
        duration: 3000,
        color: 'warning'
      });
      await toast.present();
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Sending message...',
    });
    await loading.present();

    this.http.post('http://localhost:8000/api/contact', this.contact).subscribe({
      next: async () => {
        await loading.dismiss();
        this.contact = { name: '', email: '', subject: '', message: '' }; // Reset form

        const toast = await this.toastCtrl.create({
          message: 'Message sent successfully!',
          duration: 3000,
          color: 'success',
        });
        await toast.present();
      },
      error: async (err) => {
        await loading.dismiss();
        const toast = await this.toastCtrl.create({
          message: 'Failed to send message. Please try again later.',
          duration: 3000,
          color: 'danger',
        });
        await toast.present();
        console.error('API Error:', err);
      }
    });
  }

}

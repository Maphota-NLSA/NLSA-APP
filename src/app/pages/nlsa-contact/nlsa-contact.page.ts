import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {}

  sendMessage() {
    console.log('Form Submitted:', this.contact);
    // TODO: Implement actual submission logic (e.g. API call)
  }

}

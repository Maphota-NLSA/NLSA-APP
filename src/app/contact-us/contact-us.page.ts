import { Component, OnInit } from '@angular/core';
import { IonHeader } from '@ionic/angular';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
  standalone: false,
})
export class ContactUsPage implements OnInit {

      cards = [
    {
      title: 'Search the Catalogue',
      description: 'Search through the NLSA Databases.',
      link: 'https://nlsa.on.worldcat.org/discovery',
      icon: 'book',
    },
    {
      title: 'Digital Records',
      description: 'Want to upload your E-book?.',
      link: 'https://cdm21048.contentdm.oclc.org/digital',
      icon: 'briefcase',
    },
    {
      title: 'ISBN',
      description: 'Want to request an ISBN for your E-book?',
      link: 'https://www.nlsa.ac.za/isbn/', // Replace with real link when ready
      icon: 'albums',
    },
    {
      title: 'Venue Hire',
      description: 'Want to request an ISBN for your E-book?',
      link: 'https://www.nlsa.ac.za/venue-hire/', // Replace with real link when ready
      icon: 'easel',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

  openLink(url: string) {
    if (url && url !== '#') {
      window.open(url, '_blank');
    } else {
      alert('Alert is not working as of now');
    }
  }

}

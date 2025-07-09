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
      title: 'NLSA Collections',
      description: 'Search through the NLSA Catalogue.',
      link: 'https://nlsa.on.worldcat.org/discovery',
      icon: 'book',
    },
    {
      title: 'Digital Records',
      description: 'Search through our Digital records.',
      link: 'https://cdm21048.contentdm.oclc.org/digital',
      icon: 'briefcase',
    },
    {
      title: 'ISBN',
      description: 'Appl for your ISBN number',
      link: 'https://www.nlsa.ac.za/isbn/', // Replace with real link when ready
      icon: 'albums',
    },
    {
      title: 'Venue Hire',
      description: 'Want to book a venue? Click here to request a quotation',
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

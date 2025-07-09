import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports:[CommonModule]
})
export class CardsComponent  implements OnInit {
  routerLink: any;

  constructor() { }

  ngOnInit() {}

        cards = [
    
    {
      title: 'Latest News',
      description: 'Get the latest news from the NLSA',
      link: 'https://www.nlsa.ac.za/venue-hire/', // Replace with real link when ready
      icon: 'easel',
    },{

      title: 'Services',
      description: 'Information on ISBN, Digital records, NLSA Collections, Venue Hire',
      link: '/contact-us',
      icon: 'book',
    },
    {
      title: 'Opportunities',
      description: 'Join our Team/Conduct business with the NLSA.',
      link: '/home',
      icon: 'briefcase',
    },
    {
      title: 'Contact Us',
      description: 'Connect with us',
      link: '/nlsa-contact', // Replace with real link when ready
      icon: 'albums',
    }
  ];
    openLink(url: string) {
    if (url && url !== '#') {
      window.open(url, '_blank');
    } else {
      alert('Alert is not working as of now');
    }
  }
}

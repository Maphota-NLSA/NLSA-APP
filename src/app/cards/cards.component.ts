import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports:[CommonModule, IonicModule ]
})
export class CardsComponent implements OnInit {
  routerLink: any;

  constructor() { }

  ngOnInit() { }

  cards = [
  {
    title: 'Latest News',
    description: 'Get the latest news from the NLSA',
    link: '/latest-news',
    icon: 'newspaper-outline',
    color: 'primary'
  },
  {
    title: 'Services',
    description: 'Information on ISBN, Digital records, NLSA Collections, Venue Hire',
    link: '/contact-us',
    icon: 'book-outline',
    color: 'success'
  },
  {
    title: 'Opportunities',
    description: 'Join our team/Conduct business with the NLSA.',
    link: '/opportunities',
    icon: 'briefcase-outline',
    color: 'warning'
  },
  {
    title: 'Contact Us',
    description: 'Connect with us.',
    link: '/nlsa-contact',
    icon: 'call-outline',
    color: 'tertiary'
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

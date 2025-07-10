import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, IonicModule],
})
export class CardsComponent implements OnInit {
  constructor(private router: Router) {} // Injected Router

  ngOnInit() {}

  cards = [
    {
      title: 'Latest News',
      description: 'Get the latest news from the NLSA',
      link: '/latest-news',
      icon: 'newspaper-outline',
      color: 'primary',
    },
    {
      title: 'Services',
      description: 'ISBN Infor, Digital records, NLSA Collections, Venue Hire',
      link: '/contact-us',
      icon: 'book-outline',
      color: 'success',
    },
    {
      title: 'Opportunities',
      description: 'Join our team/Conduct business with the NLSA.',
      link: '/opportunities',
      icon: 'briefcase-outline',
      color: 'warning',
    },
    {
      title: 'Contact Us',
      description: 'Connect with us.',
      link: '/nlsa-contact',
      icon: 'call-outline',
      color: 'tertiary',
    },
  ];

  openLink(url: string) {
    if (url && url !== '#') {
      this.router.navigate([url]); // Opens in same tab using Angular routing
    } else {
      alert('This link is not currently available.');
    }
  }
}

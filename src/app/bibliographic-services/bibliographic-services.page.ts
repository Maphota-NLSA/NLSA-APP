import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bibliographic-services',
  templateUrl: './bibliographic-services.page.html',
  styleUrls: ['./bibliographic-services.page.scss'],
  standalone: false,
})
export class BibliographicServicesPage implements OnInit {

    cards = [
    {
      title: 'Search the Catalogue',
      description: 'Search the entire NLSA Document Database.',
      link: 'https://nlsa.on.worldcat.org/discovery',
      icon: 'book',
    },
    {
      title: 'Legal Deposit',
      description: 'Want to upload your E-book?.',
      link: 'https://www.nlsa.ac.za/legal-deposit/',
      icon: 'briefcase',
    },
    {
      title: 'ISBN',
      description: 'Want to request an ISBN for your E-book?',
      link: 'https://www.nlsa.ac.za/isbn/', // Replace with real link when ready
      icon: 'albums',
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

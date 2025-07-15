import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.page.html',
  styleUrls: ['./opportunities.page.scss'],
  standalone: false,
})
export class OpportunitiesPage implements OnInit {
cards = [
    {
      title: 'Careers',
      description: 'Explore exciting career opportunities within NLSA. Find openings and apply today.',
      link: 'https://www.nlsa.ac.za/career-portal/',
      icon: 'book-outline',
    },
    {
      title: 'Tenders & RFQs',
      description: 'View current tenders and Requests for Quotations (RFQs) and submit your bids for NLSA related goods and services.',
      link: 'https://www.nlsa.ac.za/tenders-and-procurement/',
      icon: 'map-outline',
    }
    
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

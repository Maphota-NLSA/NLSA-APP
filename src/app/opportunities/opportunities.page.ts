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
      link: 'https://www.salibraries.ac.za/forms/fmc2024/',
      icon: 'book-outline',
    },
    {
      title: 'Tenders & RFQs',
      description: 'View current tenders and Requests for Quotations (RFQs) and submit your bids for NLSA related goods and services.',
      link: 'https://www.salibraries.ac.za/',
      icon: 'map-outline',
    }
    
  ];
  
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { HeaderPageModule } from "../header/header.module";
import { FooterPageModule } from "../footer/footer.module";
import { LogService } from '../App-services/log.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  standalone: false
})
export class ServicesPage implements OnInit {

   cards = [
    {
      title: 'Search the Catalogue ',
      description: 'Search through the NLSA Digital Collections.',
      link: 'https://nlsa.on.worldcat.org/discovery',
      icon: 'book',
    },
    {
      title: 'Digital Records',
      description: 'Search our Digital Collections.',
      link: 'https://cdm21048.contentdm.oclc.org/digital',
      icon: 'briefcase',
    },
    {
      title: 'ISBN',
      description: 'Apply for an ISBN number.',
      link: 'https://www.nlsa.ac.za/isbn/', // Replace with real link when ready
      icon: 'albums',
    },
    {
      title: 'Venue Hire',
      description: 'Book our venue for your event.',
      link: 'https://www.nlsa.ac.za/venue-hire/', 
      icon: 'easel',
    },
  ];
  constructor(private logService:LogService) { }

  ngOnInit() {
    this.logService.log('Page viewed','Services Page');
  }

  openLink(url: string) {
    if (url && url !== '#') {
      window.open(url, '_blank');
    } else {
      alert('Alert is not working as of now');
    }
  }


}

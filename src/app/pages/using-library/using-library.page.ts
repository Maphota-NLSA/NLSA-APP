import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-using-library',
  templateUrl: './using-library.page.html',
  styleUrls: ['./using-library.page.scss'],
  standalone: false,
})
export class UsingLibraryPage implements OnInit {

  cards = [
    {
      title: 'Funda Mzansi Championship',
      description: 'Register for the 2024 Funda Mzansi reading competition.',
      link: 'https://www.salibraries.ac.za/forms/fmc2024/',
      icon: 'book-outline',
    },
    {
      title: 'Directory of Public Libraries',
      description: 'Find public libraries across South Africa.',
      link: 'https://www.salibraries.ac.za/',
      icon: 'map-outline',
    },
    {
      title: 'Ask a Librarian',
      description: 'Need help? Contact a librarian for support.',
      link: 'https://cdn.sabinet.co.za/images/worldcatlocal/NLSA/asklibrarian.php',
      icon: 'chatbubbles-outline',
    },
    {
      title: 'Facilities / Venue Hire',
      description: 'Book our facilities or hire a venue for events.',
      link: 'https://www.nlsa.ac.za/venue-hire/',
      icon: 'business-outline',
    },
  ];

  constructor() {}

  ngOnInit() {

  }

  openLink(url: string) {
    if (url && url !== '#') {
      window.open(url, '_blank');
    } else {
      alert('This feature is coming soon.');
    }
  }
}

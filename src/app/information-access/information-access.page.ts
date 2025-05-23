import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-access',
  templateUrl: './information-access.page.html',
  styleUrls: ['./information-access.page.scss'],
  standalone: false,
})
export class InformationAccessPage implements OnInit {
  cards = [
    {
      title: 'Reference Library',
      description: "You'll find research materials, computers for accessing online databases and the NLSA's collection and even assistance retrieving materials from the stacks.",
      icon: 'book-outline',
    },
    {
      title: 'Reading Room',
      description: "This collection is kept on open shelves and users are able to browse and retrieve books. Seating space on the ground floor and the mezzanine level is available.",
      icon: 'map-outline',
    },
    {
      title: 'Official Publications Depository',
      description: "NLSA offers access to South African government publications, from national and provincial gazettes, legislation, parliamentary debates (Hansard), and legal reports.",
      icon: 'chatbubbles-outline',
    },
    {
      title: 'Photocopying Room',
      description: "Text Retrieval and Reading Room staff assist users in making photocopies within the limits of the Copyright Act.",
      icon: 'business-outline',
    },
    {
      title: 'Map Library',
      description: "This section houses the NLSA’s map collection. Only staff members are allowed access for retrieving and shelving this material. The map collection can be accessed through the Reference Library.",
      icon: 'business-outline',
    },
    {
      title: 'Microfilm Room',
      description: "The Microfilm Room provides microfiche and microfilm reader printers for researchers to access and convert text materials into an easily readable format. Staff are available to train users on equipment operation.",
      icon: 'business-outline',
    },
    {
      title: 'Discussion Rooms',
      description: "NLSA Library users working in teams are catered for. A discussion room is available both in the Reading Room and Reference Library and can be booked in advance at the Information Desk.",
      icon: 'business-outline',
    },
    {
      title: 'Special Collections',
      description: "The Special Collections section provides reference and retrieval services for a variety of materials, including rare books, manuscripts, maps, and iconography. Many of the items are indexed online and can be accessed via the OPAC. All items are housed in the Abe Bailey Reading Room. Please make an appointment as some items are stored off-site. Special care is taken when handling materials, so only pencils or laptops may be used for taking notes.",
      icon: 'business-outline',
    },
    {
      title: 'Reader Services',
      description: "The Reader Services section at the National Library in Cape Town facilitates access to the library's extensive collection of materials. The Reading Room assists users in locating and retrieving materials, while the Photocopy section provides duplication services within copyright guidelines. Additionally, Reader Services handles intercampus loan requests from the Pretoria Campus, ensuring access to a wider range of resources.",
      icon: 'business-outline',
    },
    
  ];
  cardsFirstFour = this.cards.slice(0, 4);
cardsAccordionOne = this.cards.slice(4, 7);
cardsAccordionTwo = this.cards.slice(7, 9);

  constructor() { }

  ngOnInit() {
  }

}

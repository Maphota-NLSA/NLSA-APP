import {ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CardsComponent  implements OnInit {
  routerLink: any;

  constructor() { }

  ngOnInit() {}

  goToContact(){
    this.routerLink['/nlsa-contact'];
  }

  goToHistory(){
    this.routerLink['/history'];
  }
}

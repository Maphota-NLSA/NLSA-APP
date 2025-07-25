import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
onSlideChange: any;
isButtonVisible: any;
  constructor() {}

}

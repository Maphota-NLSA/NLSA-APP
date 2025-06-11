import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
  standalone: false,
})
export class HeaderPage implements OnInit{
  openSearch() {
  window.open("https://nlsa.on.worldcat.org/discovery", "_blank");
}


  constructor() { }

  ngOnInit() {
  }
  
}

import { Component, OnInit,} from '@angular/core';
import { LogService } from '../App-services/log.service';

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


  constructor(private logService:LogService ) { }

  ngOnInit() {
    this.logService.log('Page viewed', 'Header Page');
  }
  
}

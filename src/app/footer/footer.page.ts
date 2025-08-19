import { Component, OnInit } from '@angular/core';
import { LogService } from '../App-services/log.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
  standalone: false,
})
export class FooterPage implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.log('Page viewed', 'Footer Page');
  }

}

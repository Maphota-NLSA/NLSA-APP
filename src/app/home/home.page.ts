import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { ActivityLoggerService } from '../App-services/activity-logger.service';
import { LogService } from '../App-services/log.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
onSlideChange: any;
isButtonVisible: any;

  constructor(private logger: ActivityLoggerService, private logService: LogService) {
     this.logService.log('page viewed', 'Home Page');
     this.logger.logActivity('page_view', { page: 'home' });
   }

  // ngOnInit() {
  //   this.logger.logActivity('page_view', { page: 'home' }); }

  //  onclickButton() {
  //    this.logService.log('Button Clicked', { button: 'home' })
  //  }
}
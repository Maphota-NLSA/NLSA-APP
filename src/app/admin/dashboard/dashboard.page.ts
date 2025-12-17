import { Component, OnInit } from '@angular/core';
// Update the import path if log.service.ts is located elsewhere, for example:
import { LogService } from '../../App-services/log.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.log('Page viewed','Administartor dashboard Page');
  }

}

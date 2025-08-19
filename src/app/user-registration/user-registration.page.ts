import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { LogService } from '../App-services/log.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.page.html',
  styleUrls: ['./user-registration.page.scss'],
  standalone: false,
  
})
export class UserRegistrationPage implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.log('Page viewed', 'User Registration Page');
  }

  userReg = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

   sendMessage() {
    console.log('Form Submitted:', this.userReg);
    // TODO: Implement actual submission logic (e.g. API call)
  }

}

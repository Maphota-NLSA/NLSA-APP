import { Component, OnInit } from '@angular/core';
import { ActivityLoggerService } from 'src/app/App-services/activity-logger.service';
import { ContactformService } from 'src/app/App-services/contactform.service';
import { LogService } from 'src/app/App-services/log.service';
import { ContactFormClass } from 'src/app/contact-form-class';
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-nlsa-contact',
  templateUrl: './nlsa-contact.page.html',
  styleUrls: ['./nlsa-contact.page.scss'],
  standalone: false,
})
export class NlsaContactPage implements OnInit {

  nlsacontact:any;
  formData = new ContactFormClass();
  // logger: any;

  constructor(private contactService: ContactformService, private  logger: ActivityLoggerService, private logService: LogService,
    private http: HttpClient,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.logger.logActivity('page_view', { page: 'nlsa-contact' });
    this.logService.log('Page viewed','Contact Us Page');
  }

  sendMessage() {
   // console.log('Form Submitted:', this.formData);
    this.contactService.sendMessage(this.formData).subscribe
      ((res: any) => {
    console.log(res);
    this.resetForm();
    alert('Message sent successfully!');
    // TODO: Implement actual submission logic (e.g. API call)address(communications@nlsa.ac.za).
  })
}
  resetForm() {
    this.formData = new ContactFormClass();
    // Optionally, reset the form state if using Angular forms
    // this.contactForm.reset();  

  }

}

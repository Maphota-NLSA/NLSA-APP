import { Component, OnInit } from '@angular/core';
import { ContactformService } from 'src/app/App-services/contactform.service';
import { ContactFormClass } from 'src/app/contact-form-class';

@Component({
  selector: 'app-nlsa-contact',
  templateUrl: './nlsa-contact.page.html',
  styleUrls: ['./nlsa-contact.page.scss'],
  standalone: false,
})
export class NlsaContactPage implements OnInit {

  nlsacontact:any;
  formData = new ContactFormClass();

  constructor(private contactService: ContactformService) {}

  ngOnInit() {}

  sendMessage() {
   // console.log('Form Submitted:', this.formData);
    this.contactService.sendMessage(this.formData).subscribe
      ((res: any) => {
    console.log(res);
    // TODO: Implement actual submission logic (e.g. API call)address(communications@nlsa.ac.za).
  })
  }
  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.subject && this.formData.message) {
      this.sendMessage();
      this.resetForm();
    } else {
      console.error('Form is invalid');
    }
  }
  resetForm() {
    this.formData = new ContactFormClass();
    // Optionally, reset the form in the UI if using a template-driven form
    const formElement = document.querySelector('form');
    if (formElement) {
      formElement.reset();
  }}
}

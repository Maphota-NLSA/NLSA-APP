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
    console.log('Form Submitted:', this.formData);

    this.contactService.sendMessage(this.formData).subscribe
      ((res: any) => {
    // this.contactService.addContactForm(this.contact).subscribe(
    //   (      response: any) => {
    //     console.log('Message sent successfully', response);
    //     // Optionally reset the form or show a success message
    //   },
    //   error => {
    //     console.error('Error sending message', error);
    //     // Optionally show an error message
    //   }
    // );
    console.log(res);
    // TODO: Implement actual submission logic (e.g. API call)address(communications@nlsa.ac.za).
  })
}

}

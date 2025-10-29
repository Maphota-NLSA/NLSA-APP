import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news_services/news.service';

@Component({
  selector: 'app-notifications-update',
  templateUrl: './notifications-update.page.html',
  styleUrls: ['./notifications-update.page.scss'],
  standalone: false,
})
export class NotificationsUpdatePage implements OnInit {

  formData = {
    Title: '',
    Description: '',
    Image: '',
  };

  selectedFile: File | null = null;

  onFileChange(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.selectedFile = file;
    this.formData.Image = file.name; // store the filename only
  }
}

  constructor(private NewsService: NewsService) {}

  onSubmit() {
    const formPayload = new FormData();
  formPayload.append('Title', this.formData.Title);
  formPayload.append('Description', this.formData.Description);

  if (this.selectedFile) {
    formPayload.append('Image', this.selectedFile, this.selectedFile.name);
  }

  this.NewsService.notification(formPayload).subscribe(
    (res: any) => {
      console.log('News saved:', res);
      this.resetForm();
    },
    (error: any) => {
      console.error('Error:', error);
    }
  );
  }

  resetForm() {
    this.formData = {
      Title: '',
      Description: '',
      Image: '',
    };
    const formElement = document.querySelector('form');
    if (formElement) {
      formElement.reset();
    }
  }

  ngOnInit() {
  }

}

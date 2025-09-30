import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news_services/news.service';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.page.html',
  styleUrls: ['./news-add.page.scss'],
  standalone: false,
})
export class NewsAddPage implements OnInit {

  formData = {
    Title: '',
    Description: '',
    Image: '',
    Story: ''
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
  formPayload.append('Story', this.formData.Story);

  if (this.selectedFile) {
    formPayload.append('Image', this.selectedFile, this.selectedFile.name);
  }

  this.NewsService.sendMessage(formPayload).subscribe(
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
      Story: ''
    };
    const formElement = document.querySelector('form');
    if (formElement) {
      formElement.reset();
    }
  }


  ngOnInit() {
  }

}

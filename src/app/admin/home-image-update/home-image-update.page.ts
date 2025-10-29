import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news_services/news.service';

@Component({
  selector: 'app-home-image-update',
  templateUrl: './home-image-update.page.html',
  styleUrls: ['./home-image-update.page.scss'],
  standalone: false,
})
export class HomeImageUpdatePage implements OnInit {
 image: any;
 
  formData = {
    Image: '',
  };

  selectedFile: File | null = null;

  onFileChange(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.selectedFile = file;
    this.formData.Image = file.name; 
  }
}

  constructor(private NewsService: NewsService) {}

  onSubmit() {
    const formPayload = new FormData();
    if (this.selectedFile) {
    formPayload.append('Image', this.selectedFile, this.selectedFile.name);
  }


  this.NewsService.imageStore(formPayload).subscribe(
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
      Image: '',
    };
    const formElement = document.querySelector('form');
    if (formElement) {
      formElement.reset();
    }
  }

  ngOnInit():void {
    this.NewsService.getImage().subscribe((
      data: any )=> {
        this.image = data;
        console.log(data.Image);
    });
     
  }

}

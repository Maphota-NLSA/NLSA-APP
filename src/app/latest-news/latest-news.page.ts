import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.page.html',
  styleUrls: ['./latest-news.page.scss'],
  standalone: false,
})
export class LatestNewsPage implements OnInit {
 newsItems = [
    {
      title: '1818 - Formation',
      description: 'Lord Charles Somerset issued a proclamation...',
      image: '../../assets/history_pic1.png'
    },
    {
      title: '1954 - The State Library',
      description: 'The State Library of the South African Republic...',
      image: '../../assets/history_2.jpg'
    },
    {
      title: '1997 - National Library Act',
      description: 'The National Library Act No 92 of 1998...',
      image: '../../assets/history_pic3.png'
    },
    {
      title: '2018 - Modern Consolidation',
      description: 'Until 1999, South Africa had two national libraries...',
      image: '../../assets/history_pic4.png'
    }
  ];

  newItem = {
    title: '',
    description: '',
    image: ''
  };

  addNewsItem() {
    if (this.newItem.title && this.newItem.description && this.newItem.image) {
      this.newsItems.push({ ...this.newItem });
      this.newItem = { title: '', description: '', image: '' };
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

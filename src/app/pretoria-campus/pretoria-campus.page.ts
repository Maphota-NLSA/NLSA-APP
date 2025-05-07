import { AfterViewInit, Component, OnInit } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-pretoria-campus',
  templateUrl: './pretoria-campus.page.html',
  styleUrls: ['./pretoria-campus.page.scss'],
  standalone: false,
})
export class PretoriaCampusPage implements OnInit,AfterViewInit  {

  schedule: {
    day: string;
    hours: string;
    open: boolean;
    isToday?: boolean;
    status?: string;
  }[] = [];

  isOpen: boolean = false;
  statusText: string = '';
  constructor() { }

  ngOnInit() {
    const allDays = [
      { day: 'Monday ', hours: ': 8am-5pm', open: true },
      { day: 'Tuesday ', hours: ': 8am-5pm', open: true },
      { day: 'Wednesday ', hours: ': 8am-5pm', open: true },
      { day: 'Thursday ', hours: ': 8am-5pm', open: true },
      { day: 'Friday ', hours: ': 8am-5pm', open: true },
      { day: 'WeekEnd ', hours: ': closed', open: false },
      { day: 'Public Holidays ', hours: ': closed', open: false },
    ] as {
      day: string;
      hours: string;
      open: boolean;
      isToday?: boolean;
      status?: string;
    }[];
    
  
    // Adjust Sunday (0) and reorder
    const currentDayIndex = new Date().getDay(); // 0 = Sunday
    const today = currentDayIndex === 0 ? 6 : currentDayIndex - 1;
    const reordered = [...allDays.slice(today), ...allDays.slice(0, today)];
  
    const now = new Date();
    const hour = now.getHours();
  
    // Set default values for all
    reordered.forEach((item, index) => {
      item.isToday = index === 0;
      if (item.isToday) {
        item.status = (item.open && hour >= 8 && hour < 17)
          ? 'Open - Closes 5PM'
          : 'Closed - Opens Tomorrow 8AM';
      } else {
        item.status = '';
      }
    });
  
    this.schedule = reordered;
  }
  ngAfterViewInit(): void {
    (window as any).initMap = () => {
      const pretoriaCampus = { lat: -25.74257756498549, lng: 28.189481728967614 };
  
      const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: pretoriaCampus,
        zoom: 16,
      });
  
      new google.maps.Marker({
        position: pretoriaCampus,
        map: map,
        title: 'Pretoria Campus',
      });
    };
  
    if ((window as any).google && (window as any).google.maps) {
      (window as any).initMap();
    }

  }
  
  
}



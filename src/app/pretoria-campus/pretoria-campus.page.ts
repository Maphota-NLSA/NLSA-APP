import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pretoria-campus',
  templateUrl: './pretoria-campus.page.html',
  styleUrls: ['./pretoria-campus.page.scss'],
  standalone: false,
})
export class PretoriaCampusPage implements OnInit  {

 //  operation hours function
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
    { day: 'Sunday', hours: ': closed', open: false },
    { day: 'Monday', hours: ': 8am-5pm', open: true },
    { day: 'Tuesday', hours: ': 8am-5pm', open: true },
    { day: 'Wednesday', hours: ': 8am-5pm', open: true },
    { day: 'Thursday', hours: ': 8am-5pm', open: true },
    { day: 'Friday', hours: ': 8am-5pm', open: true },
    { day: 'Saturday', hours: ': closed', open: false },
  ] as {
    day: string;
    hours: string;
    open: boolean;
    isToday?: boolean;
    status?: string;
  }[];

  const now = new Date();
  const currentDayIndex = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = now.getHours();

  // Reorder days to start from today
  const reordered = [...allDays.slice(currentDayIndex), ...allDays.slice(0, currentDayIndex)];

  // Find the next open day (excluding today)
  const nextOpen = reordered.slice(1).find(day => day.open);
  const nextOpenDay = nextOpen?.day ?? 'Monday'; // fallback

  reordered.forEach((item, index) => {
    item.isToday = index === 0;

    if (item.isToday) {
      if (!item.open) {
        item.status = `Closed - Opens ${nextOpenDay} 8AM`;
      } else {
        item.status = (hour >= 8 && hour < 17)
          ? 'Open - Closes 5PM'
          : `Closed - Opens ${nextOpenDay} 8AM`;
      }
    } else {
      item.status = '';
    }
  });

  this.schedule = reordered;
}
}



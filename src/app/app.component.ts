import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private router: Router) {}

  navigateToCapeTown() {
    this.router.navigate(['/capetown-campus']);

}
navigateToPretoria() {
  this.router.navigate(['/pretoria-campus']);

}
navigateToHome(){
  this.router.navigate(['/home']); 
}
}
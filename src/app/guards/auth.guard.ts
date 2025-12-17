import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');

    if (isLoggedIn === 'true') {
      return true; // allow access
    }

    // redirect to login page if not logged in
    this.router.navigate(['/login']);
    return false;
  }
}

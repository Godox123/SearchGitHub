import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IdCheckGuard implements CanActivate {
  constructor(private router: Router) {}
  public canActivate(): boolean {
    if (localStorage.getItem('userId')) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}

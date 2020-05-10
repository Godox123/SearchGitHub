import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<boolean> {
  public canDeactivate(): boolean {
    localStorage.clear();
    return true;
  }
}

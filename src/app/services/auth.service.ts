import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../Interfaces/models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  router = inject(Router);
  loggedIn = signal(false);

  get isLoggedIn(): boolean {
    return this.loggedIn();
  }

  login(user: Login): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.loggedIn.update((value) => (value = true));
    this.router.navigate(['/']);
  }

  logout(): void {
    localStorage.removeItem('user');
    this.loggedIn.update((value) => value = false);
    this.router.navigate(['/login']);
  }


}

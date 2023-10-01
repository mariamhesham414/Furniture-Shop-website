import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  isLogBehavoir: BehaviorSubject<boolean>;
  constructor() {
    this.isLogBehavoir = new BehaviorSubject<boolean>(this.isUserLoggedIn);
  }

  login(email: string, password: string) {
    let userToken = '123456';
    localStorage.setItem('token', userToken);
    this.isLogBehavoir.next(true);
  }
  logout() {
    localStorage.removeItem('token');
    this.isLogBehavoir.next(false);
  }

  get isUserLoggedIn(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
  getUserStatus(): Observable<boolean> {
    return this.isLogBehavoir.asObservable();
  }
}

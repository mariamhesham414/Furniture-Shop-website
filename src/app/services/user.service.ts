import { Injectable } from '@angular/core';
import { Iuser } from '../Models/iuser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = {};
  constructor(private httpClient: HttpClient) {
    this.http = {
      Headers: new HttpHeaders({ 'Content-Type': 'application/json ' }),
    };
  }

  signUpUser(newUser: Iuser): Observable<Iuser> {
    return this.httpClient.post<Iuser>(
      `${environment.BaseApiURL}/users`,
      JSON.stringify(newUser),
      this.http
    );
  }
}

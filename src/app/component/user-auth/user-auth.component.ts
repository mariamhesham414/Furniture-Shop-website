import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss'],
})
export class UserAuthComponent implements OnInit {
  userLog: boolean = false;
  constructor(private userAuthService: UserAuthService) {}
  ngOnInit(): void {
    this.userLog = this.userAuthService.isUserLoggedIn;
    console.log(this.userLog);
  }
  userLogin() {
    this.userAuthService.login('mariam@gmail.com', '12345');
  }
  userLogout() {
    this.userAuthService.logout();
  }
}

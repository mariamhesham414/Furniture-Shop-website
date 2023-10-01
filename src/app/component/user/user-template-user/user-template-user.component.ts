import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/Models/iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-template-user',
  templateUrl: './user-template-user.component.html',
  styleUrls: ['./user-template-user.component.scss'],
})
export class UserTemplateUserComponent {
  constructor(private userService: UserService, private router: Router) {}
  // addUser() {
  //   // static data
  //   let user: Iuser = {
  //     id: 8,
  //     firstName: 'hany',
  //     lastName: 'wael',
  //     email: 'hany@gmail.com',
  //   };
  //   this.userService.signUpUser(user).subscribe({
  //     next: (user) => {
  //       console.log(user);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }

  // user: Iuser = {} as Iuser;
  // addUser() {
  //   this.userService.signUpUser(this.user).subscribe({
  //     next: (user) => {
  //       console.log(user);
  //       this.router.navigate(['/products']);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }

  user: Iuser = {} as Iuser;
  addUser() {
    this.userService.signUpUser(this.user).subscribe({
      next: (user) => {
        console.log(user);
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

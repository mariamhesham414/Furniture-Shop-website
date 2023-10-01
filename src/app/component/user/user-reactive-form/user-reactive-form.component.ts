import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.scss'],
})
export class UserReactiveFormComponent {
  userForm: FormGroup;
  // ========
  constructor(private formBuilder: FormBuilder) {
    // this.userForm = new FormGroup({
    //   firstname: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(3),
    //   ]),
    //   lastName: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern('[a-zA-Z]{4,}'),
    //   ]),
    //   email: new FormControl('', [Validators.required]),
    // });
    // }
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required, Validators.minLength(3)],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{4,}')]],
      email: ['', [Validators.required]],
    });
  }

  // convert to property
  get firstName() {
    return this.userForm.get('firstName');
  }
  get lastName() {
    return this.userForm.get('lastName');
  }
  get email() {
    return this.userForm.get('email');
  }
}

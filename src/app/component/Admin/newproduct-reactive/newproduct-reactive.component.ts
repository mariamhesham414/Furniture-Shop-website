import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newproduct-reactive',
  templateUrl: './newproduct-reactive.component.html',
  styleUrls: ['./newproduct-reactive.component.scss'],
})
export class NewproductReactiveComponent {
  userForm: FormGroup;
  // ========
  constructor() {
    this.userForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]{4,'),
      ]),
      email: new FormControl('', [Validators.required]),
    });
  }

  // convert to property
  get firstName() {
    return this.userForm.get('firstName');
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  formSubmitClicked = false;
  formControl: any;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      state: ['', Validators.required],
      terms: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
    this.formControl = this.formGroup.controls;
  }

  submitForm() {
    this.formSubmitClicked = true;
    if (this.formGroup.invalid) {
      return;
    }
    const navigationExtras: NavigationExtras = {
      queryParams: {
        'name': this.formGroup.value.name,
        'email': this.formGroup.value.email,
        'address': this.formGroup.value.address
      }
    };

    this.router.navigate(['/form-submit'], navigationExtras);
  }
}

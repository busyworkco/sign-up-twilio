import {Component, OnInit} from '@angular/core';
import {CountryISO, SearchCountryField, TooltipLabel} from "ngx-intl-tel-input";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SignUpService} from "./sign-up.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  submitting: boolean;
  signUpForm : FormGroup;

  constructor(private fb: FormBuilder, private signUpService: SignUpService, private router: Router) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      username: new FormControl(undefined, [Validators.required]),
      password: new FormControl(undefined, [Validators.required]),
      phone: new FormControl(undefined, [Validators.required])
    })
  }

  onSubmit() {
    this.submitting = true;

    if(this.signUpForm.invalid){
      this.submitting = false;
      return;
    }

    this.signUpService.signUp(
      this.signUpForm.getRawValue()
    ).subscribe(
      value => {
        // setting the user id in localstorage, which we need later
        localStorage.setItem("user_id", value['data']['user_id']);
        this.submitting = false;
        // navigating to the verify route
        this.router.navigate(['verify']);
      },
      error1 => {
        this.submitting = false;
        alert("Couldn't sign you up.");
      }
    )
  }
}

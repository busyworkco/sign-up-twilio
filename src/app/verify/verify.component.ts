import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SignUpService} from "../sign-up/sign-up.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  verifying;
  verifyForm: FormGroup;
  constructor(private fb: FormBuilder, private signUpService: SignUpService, private router: Router) { }

  ngOnInit() {
    this.verifyForm = this.fb.group({
      activation_code: new FormControl(undefined, [Validators.required])
    });
  }

  onSubmit(){
    this.signUpService.verify(this.verifyForm.getRawValue()).subscribe(
      value => {
        this.verifying = false;
        this.router.navigate(['gated']);
      },
      error1 => {
        this.verifying = false;
        alert("Could not verify your phone number");
      }
    )
  }

}

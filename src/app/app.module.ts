import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from "@angular/common/http";

import { AppComponent } from './app.component';
import {NgxIntlTelInputModule} from "ngx-intl-tel-input";
import {BsDropdownModule} from "ngx-bootstrap";
import { SignUpComponent } from './sign-up/sign-up.component';
import {SignUpService} from "./sign-up/sign-up.service";
import { VerifyComponent } from './verify/verify.component';
import { ProfileComponent } from './profile/profile.component';

const routes : Routes = [
  {
    path: 'gated',
    component: ProfileComponent
  },
  {
    path: 'verify',
    component: VerifyComponent
  },
  {
    path: '',
    component: SignUpComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    VerifyComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    NgxIntlTelInputModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [SignUpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

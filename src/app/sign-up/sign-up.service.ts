import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

export const jsonHeader : object = {headers: new HttpHeaders({'Content-Type':  'application/json'})};


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  apiUrl = 'https://your-workspace.busywork.ai'; // Change this URL to match the one from your workspace

  constructor(private http: HttpClient) { }

  signUp(data){
    return this.http.post(
      // change the endpoint according the one from your workspace
      this.apiUrl + '/two-factor-signup',
      JSON.stringify(data),
      jsonHeader
    );
  }

  verify(data){
    return this.http.post(
      // change the endpoint according the one from your workspace
      this.apiUrl + '/two-factor-activate',
      JSON.stringify(
        {...data, 'user_id': localStorage.getItem('user_id')}
      ),
      jsonHeader
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  url = "http://localhost:8302/api/register";

  constructor(private http:HttpClient) { }

  register(userData:any){
    return this.http.post(this.url,userData,{responseType:'text'});
  }
}

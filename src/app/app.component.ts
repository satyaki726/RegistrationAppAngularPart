import { RegistrationService } from './registration.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  msg:any;

  registrationForm = new FormGroup({
    name : new FormControl('jhgj')
  })

  constructor(private registrationService:RegistrationService){}

  onSubmit(){
    this.registrationService.register(this.registrationForm.value).subscribe(data => this.msg = data);
  }
}

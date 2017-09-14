import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username = '';
  private password = '';

  constructor(@Inject('auth') private service) { }

  ngOnInit() {
  }

  onClick() {
    /*console.log(`User: ${username}\n\rPassword: ${password}`);*/
    console.log(`auth result is: ${this.service.loginWithCredentials(this.username, this.password)}`);
  }

}



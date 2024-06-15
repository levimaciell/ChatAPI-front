import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    public username = "";
    public password = "";

  login(){
    let json = {
      "username": this.username,
      "passord": this.password
    }
    console.log(json);
  }
}

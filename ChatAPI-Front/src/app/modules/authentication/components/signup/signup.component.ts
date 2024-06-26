import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  public username = "";
  public email = "";
  public password = "";

  signup(){
    let json = {
      "username": this.username,
      "email": this.email,
      "password": this.password
    };
    
    console.log(json);
  }
}

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../../../../services/authentication.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  #service = inject(AuthenticationService);

  public username = "";
  public email = "";
  public password = "";

  signup(){

    this.#service.createUser$(this.username, this.email, this.password).subscribe();
    console.log("hoorat")
  }
}

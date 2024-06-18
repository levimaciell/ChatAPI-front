import { Component } from '@angular/core';
import { SignupComponent } from '../../components/signup/signup.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [SignupComponent, HeaderComponent, FooterComponent],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {

}

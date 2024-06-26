import { Component } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginComponent, HeaderComponent, FooterComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}

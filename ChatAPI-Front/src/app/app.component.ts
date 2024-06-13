import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent
  ],
  template: `
  <app-login/>
  <router-outlet />
  `
})
export class AppComponent {
  title = 'ChatAPI-Front';
}

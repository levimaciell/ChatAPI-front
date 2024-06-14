import { Routes } from '@angular/router';
import { LoginPageComponent } from './modules/authentication/pages/login-page/login-page.component';
import { SignupPageComponent } from './modules/authentication/pages/signup-page/signup-page.component';

export const routes: Routes = [
    {
        path:'',
        component: SignupPageComponent
    }
];

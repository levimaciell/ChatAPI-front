import { Routes } from '@angular/router';
import { LoginPageComponent } from './modules/authentication/pages/login-page/login-page.component';
import { SignupPageComponent } from './modules/authentication/pages/signup-page/signup-page.component';
import { MessagePageComponent } from './modules/application/pages/message-page/message-page.component';

export const routes: Routes = [
    {
        path:'',
        component: LoginPageComponent
    },
    {
        path:'sign-up',
        component: SignupPageComponent
    },
    {
        path:'messages',
        title:'Messages',
        component: MessagePageComponent
    }
];

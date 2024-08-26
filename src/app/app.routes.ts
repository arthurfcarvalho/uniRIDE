import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { LoginComponent } from './features/login/login.component';
import { SignupComponent } from './features/signup/signup.component';
import { HomeComponent } from './features/home/home.component';
import { EditProfileComponent } from './features/edit-profile/edit-profile.component';
import { CarpoolSearchComponent } from './features/carpool-search/carpool-search.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cadastrar',
        component: SignupComponent
    },
    {
        path: 'inicio',
        component: HomeComponent
    },
    {
        path: 'editar-perfil',
        component: EditProfileComponent
    },
    {
        path: 'procurar-caronas/:bairro',
        component: CarpoolSearchComponent
    },
    {
        path: 'procurar-caronas',
        component: CarpoolSearchComponent
    }
];

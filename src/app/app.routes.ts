import { Routes } from '@angular/router';
import { Home } from '../components/home/home';
import { Contacts } from '../components/contacts/contacts';
import { Archives } from '../components/archives/archives';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'contacts',component: Contacts},
    {path:'archives', component: Archives},
    {path:'**', redirectTo:''}
];

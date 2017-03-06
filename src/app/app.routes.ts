import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { iTunesAlbumsComponent } from "./itunes/itunes.albums/itunes.albums.component";

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'iTunes', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'iTunes', component: iTunesAlbumsComponent }  
];


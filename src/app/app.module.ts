import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MusicComponent } from './music/music.component';
import { PicturesComponent } from './pictures/pictures.component';
import { ShowsComponent } from './shows/shows.component';
import { StoreComponent } from './store/store.component';
import { ContactComponent } from './contact/contact.component';
import { WoodarmyComponent } from './woodarmy/woodarmy.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'music', component: MusicComponent},
  {path: 'pictures', component: PicturesComponent},
  {path: 'shows', component: ShowsComponent},
  {path: 'woodarmy', component: WoodarmyComponent},
  {path: 'store', component: StoreComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MusicComponent,
    PicturesComponent,
    ShowsComponent,
    StoreComponent,
    ContactComponent,
    WoodarmyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

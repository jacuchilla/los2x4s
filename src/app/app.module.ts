import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'home', component: },
  {path: 'about', component: },
  {path: 'music', component: },
  {path: 'pictures', component: },
  {path: 'shows', component: },
  {path: 'store', component: },
  {path: 'contact', component: },
  {path: '', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
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

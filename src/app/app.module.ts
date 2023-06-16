import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule, Route, Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelocmePageComponent } from './welocme-page/welocme-page.component';
import { LogoComponent } from './logo/logo.component';

const routes: Routes = [
  {path:"**",component: WelocmePageComponent},
 {path:"",component:WelocmePageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    WelocmePageComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

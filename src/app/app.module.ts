import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WelcomePageComponent } from './page-welcome/welcome-page/welcome-page.component';
import { AlertifyService } from './services/alertify.service';
import { WebsocketService } from "./services/websocket.service";
import { LoginService } from './services/login.service';
import { DatabaseService } from './services/database.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomePageForgetPassComponent } from './page-welcome/welcome-page-forget-pass/welcome-page-forget-pass.component';
import { WelcomePageNavBarComponent } from './page-welcome/welcome-page-nav-bar/welcome-page-nav-bar.component';
import { WelcomePageGirisComponent } from './page-welcome/welcome-page-giris/welcome-page-giris.component';
import { WelcomePageKayitComponent } from './page-welcome/welcome-page-kayit/welcome-page-kayit.component';
import { GizlilikPolitikasiComponent } from './page-welcome/gizlilik-politikasi/gizlilik-politikasi.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { HakkimizdaComponent } from './page-welcome/hakkimizda/hakkimizda.component';
import { IptalIadeComponent } from './page-welcome/iptal-iade/iptal-iade.component';
import { IletisimComponent } from './page-welcome/iletisim/iletisim.component';
import { WelcomePageFooterComponent } from './page-welcome/welcome-page-footer/welcome-page-footer.component'

const routes: Routes = [
  { path: "", component: WelcomePageComponent },
  { path: "forget-pass", component: WelcomePageForgetPassComponent },
  { path: "**", component: WelcomePageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavBarComponent,
    WelcomePageComponent,
    WelcomePageNavBarComponent,
    WelcomePageGirisComponent,
    WelcomePageKayitComponent,
    WelcomePageForgetPassComponent,
    GizlilikPolitikasiComponent,
    HakkimizdaComponent,
    IptalIadeComponent,
    IletisimComponent,
    WelcomePageFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
  ],
  providers: [
    AlertifyService,
    WebsocketService,
    LoginService,
    DatabaseService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

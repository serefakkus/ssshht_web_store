import { Component } from '@angular/core';
import { Phone, User } from 'src/app/models/user_model';
import { AlertifyService } from 'src/app/services/alertify.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-welcome-page-giris',
  templateUrl: './welcome-page-giris.component.html',
  styleUrls: ['./welcome-page-giris.component.css'],
})
export class WelcomePageGirisComponent {

  constructor(
    private alertfyService: AlertifyService,
    private loginService: LoginService,
  ) { }

  loginUser: any = {};
  isDisabledGiris: boolean = true
  IsPassHide: boolean = true

  formControl() {

    var phone: Phone = new Phone()
    phone.no = this.loginUser.no
    var errMessage: string = ""

    errMessage = phone.noIsOK()
    var pass: string = this.loginUser.sifre

    if (errMessage == "" && pass.length > 5) {
      this.isDisabledGiris = false
    } else {
      this.isDisabledGiris = true
    }
  }

  passEyeClick() {
    this.IsPassHide = !this.IsPassHide
  }

  async sendSignUp() {

    var user: User = new User()
    var phone: Phone = new Phone()
    var beniHatirla: boolean = this.loginUser.beniHatirla

    var phoneStr:string = this.loginUser.no

    phone.no = phoneStr.toString()

    var errMessage: string | undefined

    errMessage = phone.noIsOK()

    user.phone = phone

    if (errMessage != "") {
      this.alertfyService.wrong("Telefon numarası hatalı", errMessage)
      return
    }

    user.pass = this.loginUser.sifre

    errMessage = user.passIsOk()

    if (errMessage != "") {
      this.alertfyService.wrong("Şifre hatalı", errMessage)
      return
    }

    user.istek_tip = "login"

    var ok: boolean = await this.loginService.logIn(user, beniHatirla)

    if (ok) {

    }

  }
}

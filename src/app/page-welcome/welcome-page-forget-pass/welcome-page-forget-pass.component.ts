import { Component } from '@angular/core';
import { Phone, User } from 'src/app/models/user_model';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ForgetpassService } from 'src/app/services/forgetpass.service';

@Component({
  selector: 'app-welcome-page-forget-pass',
  templateUrl: './welcome-page-forget-pass.component.html',
  styleUrls: ['./welcome-page-forget-pass.component.css']
})
export class WelcomePageForgetPassComponent {

  constructor(
    private alertfyService: AlertifyService,
    private forgetPassService:ForgetpassService
  ) { }

  IsPassHide: boolean = true
  IsPassHideTekrar: boolean = true

  loginUser: any = {};

  isDisabledKodButton: boolean = true
  IsDisabledKodText: boolean = true
  IsDisabledSendButton: boolean = true
  IsDisabledPhoneText: boolean = false

  hide: boolean = true
  hide2: boolean = true

  IsOnay: boolean = false

  passEyeClick() {
    console.log(this.IsPassHide);

    this.IsPassHide = !this.IsPassHide
  }


  passTekrarEyeClick() {
    this.IsPassHideTekrar = !this.IsPassHideTekrar
  }


  phoneControl() {

    var phone: Phone = new Phone()

    phone.no = this.loginUser.no

    var errMessage: string = ""

    errMessage = phone.noIsOK()

    if (errMessage == "") {
      this.isDisabledKodButton = false
      return true
    } else {
      this.isDisabledKodButton = true
      return false
    }
  }


  codeControl() {

    var codeStr: string = ""
    var code: number = this.loginUser.code

    codeStr = code.toString()

    if (codeStr.length == 5) {
      this.IsDisabledSendButton = false
      return true
    } else {
      this.IsDisabledSendButton = true
      return false
    }
  }


  async codeSend() {

    var phone: Phone = new Phone()

    phone.no = this.loginUser.no.toString()

    var ok: boolean = false

    ok = this.phoneControl()

    if (!ok) {
      this.alertfyService.wrong('Telefon numarası', "Telefon numarası hatalı")
      return
    }

    var user: User = new User()

    user.phone = phone
    user.istek_tip = "new_pass"

    ok = await this.forgetPassService.sendCode(user)

    if (ok) {
      this.IsDisabledPhoneText = true
      this.IsDisabledKodText = false
    }
  }


  async sendIsCode() {

    var ok: boolean = false

    ok = this.codeControl()

    if (!ok) {
      this.alertfyService.wrong("Kod hatalı", "Lütfen telefonunuza gelen 5 haneli kodu giriniz")
      return
    }

    var user: User = new User

    var phone: Phone = new Phone()

    phone.no = this.loginUser.no.toString()

    ok = this.phoneControl()

    if (!ok) {
      this.alertfyService.wrong('Telefon numarası', "Telefon numarası hatalı")
      return
    }

    var code: number = this.loginUser.code

    phone.code = code.toString()

    user.phone = phone
    user.istek_tip = "ref_code"

    ok = await this.forgetPassService.sendCodeIsOk(user)

    if (ok) {
      this.IsOnay = true
      this.IsDisabledKodText = true
      this.IsDisabledPhoneText = true
    }
  }


  async sendSignUp() {

    var ok: boolean = false

    ok = this.codeControl()

    if (!ok) {
      this.alertfyService.wrong("Kod hatalı", "Lütfen telefonunuza gelen 5 haneli kodu giriniz")
      return
    }

    var user: User = new User

    var phone: Phone = new Phone()

    phone.no = this.loginUser.no.toString()

    ok = this.phoneControl()

    if (!ok) {
      this.alertfyService.wrong('Telefon numarası', "Telefon numarası hatalı")
      return
    }

    var code: number = this.loginUser.code

    phone.code = code.toString()

    user.phone = phone

    var pass: string = ""
    pass = this.loginUser.newPass

    user.pass = pass.toString()

    ok = this.passControl()

    if (!ok) {
      return
    }

    user.istek_tip = "ref_pass"

    ok = await this.forgetPassService.sendNewPass(user)

    if (ok) {

    }

  }


  passControl() {
    var pass: string = this.loginUser.newPass

    if (pass.length < 6) {
      this.alertfyService.wrong("Şifre çok kısa", 'lütfen şifreyi en az 6 hane olacak şekilde belirleyin')
      return false
    }

    if (this.loginUser.newPass != this.loginUser.newPassTekrar) {
      this.alertfyService.wrong("Şifreler eşleşmiyor", "lütfen yeni şifre ve yeni şifre tekrar bölümünü yanı girin")
      return false
    }
    return true
  }
}

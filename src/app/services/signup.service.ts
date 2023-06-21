import { Injectable } from '@angular/core';
import { User } from '../models/user_model';
import { WebsocketService } from './websocket.service';
import { DatabaseService } from './database.service';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private databaseSetvice: DatabaseService,
    private wSService: WebsocketService,
    private alertfyService: AlertifyService,
  ) { }

  public async sendCode(user: User) {

    var isOk: boolean = false

    var errMessage: string = "";

    if (user.phone == null) {
      errMessage = "Telefon hatali sorun devam ederse bizimle ilerişime geçin"
      this.alertfyService.wrong("Girilen değer yanlış", errMessage)
      return isOk
    }

    errMessage = user.phone.noIsOK()

    if (errMessage != "") {
      this.alertfyService.wrong("Girilen değer yanlış", errMessage)
      return isOk
    }

    user = await this.wSService.sendUserToServer(user)

    if (user.status) {
      this.alertfyService.succes("kod gönderimi başarılı :)")
      //********************************
      //IsLoginUser = true
      //AuthToken = gelenMssg.token?.token_details?.access_token
      this.databaseSetvice.saveToken(user)

      isOk = true
      return isOk
    }
    if (user.phone.code == "telefon var") {
      this.alertfyService.wrong("Telefon numarası kayıtlı", "Bu numara daha önceden kayıt edilmiş lütfen giriş yapın veya farklı bir numara ile kayıt olun")

      isOk = false
      return isOk
    }

    if (user.phone.no == "bekle") {
      this.alertfyService.wrong("Kod göderilemedi", "Çok fazla kod gönderildi lütfen daha sonra tekrar deneyiniz")
      isOk = false
      return isOk
    }

    this.alertfyService.wrong("Kod göderilemedi", "Bir sorun oluştu lütfen daha sonra tekrar deneyiniz")

    isOk = false
    return isOk
  }

  public async sendCodeIsOk(user: User) {

    var isOk: boolean = false

    var errMessage: string = "";

    if (user.phone == null) {
      errMessage = "Telefon hatali sorun devam ederse bizimle ilerişime geçin"
      this.alertfyService.wrong("Girilen değer yanlış", errMessage)
      return isOk
    }

    errMessage = user.phone.noIsOK()

    if (errMessage != "") {
      this.alertfyService.wrong("Girilen değer yanlış", errMessage)
      return isOk
    }

    if (user.phone.code.length != 5) {
      this.alertfyService.wrong("Girilen değer yanlış", "Kod 5 haneli olmalı")
      return isOk
    }

    user = await this.wSService.sendUserToServer(user)

    if (user.status) {
      this.alertfyService.succes("kod doğru :)")
      //********************************
      //IsLoginUser = true
      //AuthToken = gelenMssg.token?.token_details?.access_token
      this.databaseSetvice.saveToken(user)

      isOk = true
      return isOk
    }

    this.alertfyService.wrong("Kod hatalı", "Kod hatalı lütfen telefona gelen 5 haneli kodu giriniz")
    return isOk
  }

  public async sendSignUp(user: User) {

    var isOk: boolean = false

    var errMessage: string = "";

    if (user.phone == null) {
      errMessage = "Telefon hatali sorun devam ederse bizimle ilerişime geçin"
      this.alertfyService.wrong("Girilen değer yanlış", errMessage)
      return isOk
    }

    errMessage = user.phone.noIsOK()

    if (errMessage != "") {
      this.alertfyService.wrong("Girilen değer yanlış", errMessage)
      return isOk
    }

    if (user.phone.code.length != 5) {
      this.alertfyService.wrong("Girilen değer yanlış", "Kod 5 haneli olmalı")
      return isOk
    }

    if (user.pass.length < 6) {
      this.alertfyService.wrong("Girilen değer yanlış", "Şifre en az 6 haneli olmalı")
      return isOk
    }

    user = await this.wSService.sendUserToServer(user)

    if (user.status) {
      this.alertfyService.succes("Kayıt başarılı :)")
      //********************************
      //IsLoginUser = true
      //AuthToken = gelenMssg.token?.token_details?.access_token
      this.databaseSetvice.saveToken(user)

      isOk = true
      return isOk
    }

    this.alertfyService.wrong("Bir hata oluştu", "Lütfen daha sonra tekrar deneyiniz")
    return isOk

  }
}

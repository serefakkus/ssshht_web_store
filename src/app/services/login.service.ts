import { Injectable } from '@angular/core';
import { User } from '../models/user_model';
import { WebsocketService } from './websocket.service';
import { DatabaseService } from './database.service';
import { AlertifyService } from './alertify.service';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private databaseSetvice: DatabaseService,
    private wSService: WebsocketService,
    private alertfyService: AlertifyService,
  ) { }

  public async logIn(user: User, hatirla: boolean) {

    var ok: boolean = false

    var errMessage: string = "";

    if (user.phone == null) {
      errMessage = "Telefon hatali sorun devam ederse bizimle ilerişime geçin"
      this.alertfyService.wrong("Girilen değer yanlış", errMessage)
      return ok
    }

    if (user.pass == null) {
      errMessage = "Şifre hatali sorun devam ederse bizimle ilerişime geçin"
      this.alertfyService.wrong("Girilen değer yanlış", errMessage)
      return ok
    }

    errMessage = user.phone.noIsOK()

    if (errMessage != "") {
      this.alertfyService.wrong("Girilen değer yanlış", errMessage)
      return ok
    }

    errMessage = user.passIsOk()
    if (errMessage != "") {
      this.alertfyService.wrong("Girilen değer yanlış", errMessage)
      return ok
    }

    user = await this.wSService.sendUserToServer(user)

    if (user.status) {
      this.alertfyService.succes("giriş başarılı :)")

      //********************************
      //IsLoginUser = true
      //AuthToken = gelenMssg.token?.token_details?.access_token
      if (hatirla) {
        this.databaseSetvice.saveToken(user)
      }

      ok = true
      return ok
    }

    this.alertfyService.wrong("Giriş yapılamadı", "Kullanıcı adı veya şifre hatalı")
    return ok
  }

}

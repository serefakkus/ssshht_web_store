import { Time } from "@angular/common"

export class User {
  status: boolean = false
  is_resim: boolean = false
  is_kurumsal: boolean = false
  offset: number = 0
  taksit_sayisi: number = 0
  id: number = 0
  satis: number = 0
  paket_id: number = 0
  cafe_id: number = 0
  video_dur: number = 0
  video_count: number = 0
  bakiye: number = 0
  kredi: number = 0
  tutar: number = 0
  istek_tip: string = ""
  name: string = ""
  surname: string = ""
  tckn: string = ""
  pass: string = ""
  kimlik: string = ""
  video_id: string = ""
  video_name: string = ""
  video_tip: string = ""
  not: string = ""
  raw_time: string = ""
  url: string = ""
  adres: string = ""
  vergi_dairesi: string = ""
  il: string = ""
  ilce: string = ""
  mail: string = ""
  unvan: string = ""
  vergi_no: string = ""
  bin_number: string = ""
  day: string[] = []
  sehir: Array<string> = []
  video: Uint8Array |undefined
  phone: Phone = new Phone()
  token: Token = new Token()
  card: Card = new Card()
  three_ds: ThreeDsGelen = new ThreeDsGelen()
  video_mongo: Video[] = []
  arsiv: HesapArsiv[] = []
  taksitler: Taksit[] = []
  paket_special: PaketSpacial[] = []
  paket_list: Paket[] = []
  cafe_list: CafeInfo[] = []
  PassHelperStr:string = ""
  Mssg:Uint8Array |undefined

  public passIsOk() {
    var errMssg: string = ""
    if (this.pass == null) {
      errMssg = "Lütfen şifre alanını doldurunuz"
      return errMssg
    }

    if (this.pass.length < 6) {
      errMssg = "Şifre en az 6 hane olmalı"
      return errMssg
    }

    return errMssg
  }
}

export class Phone {
  status: boolean = false
  ok: boolean = false
  id: number = 0
  user_id: number = 0
  user_type: number = 0
  istek_tip: string = ""
  no: string = ""
  code: string = ""
  raw_time: Uint8Array |undefined

  public noIsOK() {
    var errMssg: string = ""
    if (this.no == null) {
      errMssg = "Lütfen numara alanını doldurunuz"
      return errMssg
    }

    const phoneNo: string = this.no.toString()

    const firstCharOfPhone = phoneNo.charAt(0);

    if (firstCharOfPhone != "5") {
      errMssg = "Cep telefonu numaranızı başında 0 olmadan giriniz"
      return errMssg
    }

    var noInt = parseInt(phoneNo)
    if (noInt == null) {
      errMssg = "Lütfen geçerli bir numara giriniz"
      return errMssg
    }

    if (phoneNo.length != 10) {
      errMssg = "lütfen telefon numaranızı 10 hane olacak şekilde giriniz"
      return errMssg
    }

    this.no = this.no.toString()

    return errMssg
  }
}

class Token {
  ok: boolean = false
  istek_type: number = 0
  user_type: number = 0
  user_id: number = 0
  istek_id: number = 0
  auth: string = ""
  token_details: TokenDetails = new TokenDetails()
}

class TokenDetails {
  at_expires: number = 0
  rt_expires: number = 0
  access_token: string = ""
  refresh_token: string = ""
  access_uuid: string = ""
  refresh_uuid: string = ""
}

class Card {
  card_holder_name: string = ""
  card_number: string = ""
  expire_month: string = ""
  expire_year: string = ""
  cvc: string = ""
}

class ThreeDsGelen {
  systemTime: number = 0
  status: string = ""
  locale: string = ""
  conversationId: string = ""
  threeDSHtmlContent: string = ""
  errorCode: string = ""
  errorMessage: string = ""
  errorGroup: string = ""
}

class Video {
  waiting: boolean = false
  verify: boolean = false
  duration: number = 0
  personel_id: number = 0
  video_id: string = ""
  video_name: string = ""
  not: string = ""
  url: string = ""
}

class HesapArsiv {
  personel_id: number = 0
  bakiye_degisim: number = 0
  kalan_bakiye: number = 0
  video_id: string = ""
  paket_name: string = ""
  cafe_name: Array<number> = []
  reklam_tarih: string[] = []
}

class Taksit {
  taksit_tutar: number = 0
  toplam_tutar: number = 0
  taksit_sayisi: number = 0
}

class PaketSpacial {
  id: number = 0
  cafe_id: number = 0
  duration_second: number = 0
  fiyat: number = 0
  name: string = ""
  sehir: string = ""
  urun_id: string = ""
}

class Paket {
  masa: number = 0
  adet: number = 0
  day: number = 0
  id: number = 0
  goruntuleme: number = 0
  fiyat: number = 0
  name: string = ""
  info: string = ""
  urun_id: string = ""
  sehir: string = ""
  cafe_id: Array<number> = []
  gunluk_tarih: string[] = []
  haftalik_tarih: string[] = []
  aylik_tarih: string[] = []
}

class CafeInfo {
  id: number = 0
  loc_x: number = 0
  loc_y: number = 0
  name: string = ""
}

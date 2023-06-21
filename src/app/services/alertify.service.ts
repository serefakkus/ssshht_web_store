import { Injectable } from '@angular/core';

declare let alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  succes(message:string) {
    alertify.success(message)
  }

  wrong(title:string,message:string) {
    alertify.alert(title,function(){
      alertify.message()
    })
    alertify.error(message)
  }
}

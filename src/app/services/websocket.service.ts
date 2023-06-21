import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { User } from '../models/user_model';
import { catchError, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

const WS_ENDPOINT:string = 'ws://localhost:8081/ws';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public async sendUserToServer(user: User) {

    var socket$: WebSocketSubject<any> | undefined;

    socket$ = this.getNewWebSocket();

    var subscriber = socket$.subscribe()

    socket$.next(user)

    const messages = socket$.pipe(
      tap({
        error: error => console.log(error),
      }), catchError(_ => EMPTY));

    await messages.forEach(value => {

      user = value

      subscriber.unsubscribe()

      socket$?.complete()
      return
    })

    return user

  }

  private getNewWebSocket() {
    return webSocket(WS_ENDPOINT);
  }

}


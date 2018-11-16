import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message';
import { Meta } from '@angular/platform-browser';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  public backend = 'http://91.121.148.187:10000/';

  constructor(
    private meta: Meta,
    private httpClient: HttpClient,
    private authService: AuthService)
  { }

  getAllMessages(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(this.backend +'messages');
  }

  postMessage(message: Message) {
    const user = this.authService.getAuthUser();
    const toPost = {name: user.name, message};
    console.log(toPost);
    this.httpClient.post(this.backend +'messages', toPost).subscribe();
  }
}

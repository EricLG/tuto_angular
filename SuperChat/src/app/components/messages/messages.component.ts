import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models/message';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  public messages: Array<Message>;
  public messages2: Observable<Message[]>;
  public authUser: User;
  public newMsg: Message = new Message('', false);

  constructor(
    private messagesService: MessagesService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.messagesService.getAllMessages().subscribe((data) => {
      this.messages = data;
    });
    //this.messages2 = this.messagesService.getAllMessages()
    this.authUser = this.authService.getAuthUser();

  }

  submit(data) {
    this.newMsg.content = data.content;
    this.messagesService.postMessage(this.newMsg);
  }

}

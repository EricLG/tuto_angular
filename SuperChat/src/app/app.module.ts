import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageComponent } from './components/message/message.component';
import { PrivateComponent } from './components/private/private.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessagesComponent,
    MessageComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

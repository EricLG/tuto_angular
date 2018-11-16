import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageComponent } from './components/message/message.component';
import { PrivateComponent } from './components/private/private.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';


export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'messages',
    canActivate: [AuthGuard],
    component: MessagesComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessagesComponent,
    MessageComponent,
    PrivateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

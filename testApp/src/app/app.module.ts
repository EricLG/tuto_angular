import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { SubComponent } from './sub/sub.component';
import { TodoService } from './services/todo.service';
import { GenericTodoService } from './models/generic.todo.service';
import { TodoPipe } from './pipes/todo.pipe';
import { TodofilterPipe } from './pipes/todofilter.pipe';
import { TodoComponent } from './todo/todo.component';
import { TestDirective } from './directives/test.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ErrorComponent } from './error/error.component';
import { Sub2Component } from './sub2/sub2.component';
import { LogguedInGuard } from './guards/loggued-in.guard';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'sub1', pathMatch: 'full' },
  { path: 'sub1', component: SubComponent },
  { path: 'sub2', component: Sub2Component, canActivate: [LogguedInGuard] },
  { path: '**', component: ErrorComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    SubComponent,
    TodoPipe,
    TodofilterPipe,
    TodoComponent,
    TestDirective,
    HighlightDirective,
    TodoFormComponent,
    UserFormComponent,
    ErrorComponent,
    Sub2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    {
      provide: GenericTodoService,
      useClass: TodoService
    },
    LogguedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

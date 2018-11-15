import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: GenericTodoService,
      useClass: TodoService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

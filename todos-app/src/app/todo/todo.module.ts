import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoReactiveformComponent } from './todo-reactive-form/todo-reactive-form.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TodoListSignalComponent } from './todo-list-signal/todo-list-signal.component';




@NgModule({
  declarations: [
    TodoListComponent,
    TodoFormComponent,
    TodoReactiveformComponent,
    TodoListSignalComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,MatInputModule,ReactiveFormsModule
  ],
  exports:[TodoListComponent,TodoFormComponent, TodoReactiveformComponent,TodoListSignalComponent]
})
export class TodoModule { }

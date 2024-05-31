import { Component, inject } from '@angular/core';
import { Todo } from '../../models/todo';
import { Store } from '@ngrx/store';
import { addTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  todoForm: Todo = {
    title: '',
    completed: false,
  };

  constructor(private store: Store<{ todoList: Todo[] }>) {}

  submitTodo() {
    this.store.dispatch(addTodo({ todo: this.todoForm }));
  }
}

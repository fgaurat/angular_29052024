import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from '../../models/todo';
import { addTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrl: './todo-reactive-form.component.css',
})
export class TodoReactiveformComponent {
  private fb: FormBuilder = inject(FormBuilder);

  todoForm = this.fb.group({
    title: ['', Validators.required],
    completed: [false],
  });
  constructor(private store: Store<{ todoList: Todo[] }>) {}

  save() {
    console.log(this.todoForm.value);
    console.log(this.todoForm.getRawValue());
    this.store.dispatch(addTodo({ todo: this.todoForm.value as Todo }));
  }
}

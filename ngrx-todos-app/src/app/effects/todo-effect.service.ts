import { Injectable } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addTodo,
  deleteTodo,
  deleteTodoOK,
  loadTodo,
  loadTodoOk,
} from '../todo/todo.actions';
import { map, switchMap } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoEffectService {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadTodo),
      switchMap(() => this.todoService.findAll()),
      map((todos: Todo[]) => loadTodoOk({ todos }))
    );
  });

  deleteTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteTodo),
      map((action) => {
        this.todoService.delete(action.todo);
        return action;
      }),
      map((action) => deleteTodoOK({ todo: action.todo }))
      // map(() => loadTodo())
      // map((todos: Todo[]) => loadTodoOk({ todos }))
    );
  });

  addTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addTodo),
      switchMap((action) => this.todoService.save(action.todo)),
      map(() => loadTodo())

      // map((todos: Todo[]) => loadTodoOk({ todos }))
    );
  });
}

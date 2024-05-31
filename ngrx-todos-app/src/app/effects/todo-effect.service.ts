import { Injectable } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadTodo, loadTodoOk } from '../todo/todo.actions';
import { map, switchMap } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoEffectService {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(  
        
      ),
      switchMap(() => this.todoService.findAll()),
      map((todos: Todo[]) => loadTodoOk({ todos }))
    );
  });
}

import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo';

export const loadTodo = createAction('[TodoList Component] Load');
export const loadTodoOk = createAction(
  '[TodoList Component] Load OK',
  props<{ todos: Todo[] }>()
);
export const deleteTodo = createAction(
  '[TodoList Component] Delete',
  props<{ todo: Todo }>()
);
export const addTodo = createAction(
  '[TodoForm Component] Add',
  props<{ todo: Todo }>()
);
export const deleteTodoOK = createAction(
  '[TodoList Component] Delete OK',
  props<{ todo: Todo }>()
);

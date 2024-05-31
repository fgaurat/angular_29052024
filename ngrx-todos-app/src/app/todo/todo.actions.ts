import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo';

export const loadTodo = createAction('[TodoList Component] Load');
export const loadTodoOk = createAction(
  '[TodoList Component] Load OK',
  props<{ todos: Todo[] }>()
);
export const deleteTodo = createAction('[TodoList Component] Delete');
// export const addTodo = createAction('[TodoForm Component] Add');

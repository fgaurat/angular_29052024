import { createReducer, on } from '@ngrx/store';
import { deleteTodo, loadTodo, loadTodoOk } from './todo.actions';
import { Todo } from '../models/todo';

export const initialState: Todo[] = [];

export const todoListReducer = createReducer(
  initialState,
  on(loadTodoOk, (state, action) => action.todos),
  on(deleteTodo, (state) => [])
);

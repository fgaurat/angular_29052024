import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { Todo } from '../../models/todo';
import { EMPTY, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { deleteTodo, loadTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  displayedColumns = ['id', 'title', 'chkCompleted', 'completed', 'action'];
  todos$: Observable<Todo[]> = EMPTY;

  constructor(private store: Store<{ todoList: Todo[] }>) {
    this.todos$ = store.select('todoList');
  }

  ngOnInit(): void {
    this.store.dispatch(loadTodo());
  }
  onDelete(todo: Todo) {
    this.store.dispatch(deleteTodo({ todo }));
  }
}

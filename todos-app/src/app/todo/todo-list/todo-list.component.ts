import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { EMPTY, Observable, filter, merge, switchMap } from 'rxjs';
import { Todo } from '../../models/todo';
import { MessageQueueService } from '../../services/message-queue.service';
import { Action } from '../../models/action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit, AfterViewInit{

  private todoService: TodoService = inject(TodoService);
  private messageQueueService: MessageQueueService = inject(MessageQueueService);

  todos$:Observable<Todo[]> = EMPTY;
  displayedColumns = ["id","title","chkCompleted","completed","action"];
  
  ngOnInit(): void {
    // this.messageQueueService.bus$.subscribe(()=>this.todos$ = this.todoService.findAll());

    // this.todos$ = this.todoService.findAll();

    // this.todos$ = merge().pipe(


    const loadTodos$ =this.messageQueueService.bus$.pipe(
      filter((action:Action)=> action.type==="LOAD_TODOS")
    )


    const newTodos$ =this.messageQueueService.bus$.pipe(
      filter((action:Action)=> action.type==="NEW_TODO")
    );
    const deleteTodo$ =this.messageQueueService.bus$.pipe(
      filter((action:Action)=> action.type==="DELETE_TODO"),
      switchMap((action:Action)=>this.todoService.delete(action.payload) )
    );


    this.todos$ = merge(newTodos$,deleteTodo$,loadTodos$).pipe(
      switchMap(()=>this.todoService.findAll() )
    )

  }
  onDelete(todo:Todo){
    // this.todoService.delete(todo).subscribe(()=> this.todos$ = this.todoService.findAll());

    // this.todos$ = this.todoService.delete(todo).pipe(
    //   switchMap(()=>this.todoService.findAll() )
    // );

    this.messageQueueService.dispatch({type:"DELETE_TODO",payload:todo})
  }

  ngAfterViewInit(): void {
    this.messageQueueService.dispatch({type:"LOAD_TODOS"})

  }
}

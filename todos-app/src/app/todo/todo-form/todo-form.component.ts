import { Component, inject } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { MessageQueueService } from '../../services/message-queue.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  private todoService: TodoService = inject(TodoService);
  private messageQueueService: MessageQueueService = inject(MessageQueueService);

  todoForm:Todo={
    title:"",
    completed:false
  }

  submitTodo(){

    this.todoService.save(this.todoForm).subscribe(()=>this.messageQueueService.dispatch({type:"NEW_TODO"}));
  }
}

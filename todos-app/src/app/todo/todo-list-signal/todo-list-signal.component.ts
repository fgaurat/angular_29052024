import { Component, inject } from '@angular/core';
import { MessageQueueSignalService } from '../../services/message-queue-signal.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list-signal',
  templateUrl: './todo-list-signal.component.html',
  styleUrl: './todo-list-signal.component.css'
})
export class TodoListSignalComponent {
  private messageQueueService: MessageQueueSignalService = inject(MessageQueueSignalService);
  private todoService: TodoService = inject(TodoService);

}

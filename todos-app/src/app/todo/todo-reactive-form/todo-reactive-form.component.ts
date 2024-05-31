import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { MessageQueueService } from '../../services/message-queue.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-reactive-form', 
  templateUrl: './todo-reactive-form.component.html',
  styleUrl: './todo-reactive-form.component.css'
})
export class TodoReactiveformComponent {
  private todoService: TodoService = inject(TodoService);
  private messageQueueService: MessageQueueService = inject(MessageQueueService);
  private fb: FormBuilder = inject(FormBuilder);  

  todoForm = this.fb.group({
    title:['',Validators.required],
    completed:[false]
  })

  save(){
    console.log(this.todoForm.value) 
    console.log(this.todoForm.getRawValue()) 
    this.todoService.save(this.todoForm.value as Todo ).subscribe(()=>this.messageQueueService.dispatch({type:"NEW_TODO"}))
  }


}

  
  
  
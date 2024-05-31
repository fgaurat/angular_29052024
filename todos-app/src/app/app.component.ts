import { compileNgModule } from '@angular/compiler';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TodoService } from './services/todo.service';
import { Todo } from './models/todo';
import { EMPTY, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TodoModule } from './todo/todo.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,TodoModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'todos-app';


}

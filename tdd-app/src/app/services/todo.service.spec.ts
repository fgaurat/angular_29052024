import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { of } from 'rxjs';

describe('TodoService', () => {
  let todoService: TodoService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    todoService = new TodoService(httpClientSpy);
  });

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(TodoService);
  // });

  it('should be created', () => {
    expect(todoService).toBeTruthy();
  });

  it('should return expected todos (HttpClient called once)', () => {
    const expectedTodos: Todo[] = [
      {
        userId: 1,
        id: 7,
        title: 'illo expedita consequatur quia in',
        completed: false,
      },
      {
        userId: 1,
        id: 8,
        title: 'quo adipisci enim quam ut ab',
        completed: true,
      },
    ];

    httpClientSpy.get.and.returnValue(of(expectedTodos));

    todoService.findAll().subscribe({
      next: (todos) => {
        expect(todos).withContext('expected heroes').toEqual(expectedTodos);
      },
    });

    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });
});

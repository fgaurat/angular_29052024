import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { counterReducer } from './counter.reducer';
import { Store, StoreModule } from '@ngrx/store';
import { decrement,increment,incrementBy,reset } from './counter.actions';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-counter-app';

  count$: Observable<{value:number}>;

  constructor(private store: Store<{ count: {value:number} }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }
  incrementBy(incValue:number) {
    this.store.dispatch(incrementBy({theValue:incValue}));
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}

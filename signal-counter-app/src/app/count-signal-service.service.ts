import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountSignalServiceService {
  private counter = signal(0);

  readonly count = this.counter.asReadonly();

  inc() {
    this.counter.update((value) => value + 1);
  }
}

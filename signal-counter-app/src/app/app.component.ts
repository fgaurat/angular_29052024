import { Component, Signal, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IncComponent } from './inc.component';
import { ShowComponent } from './show.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IncComponent, ShowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  count = signal(0);
  title = 'signal-counter-app';
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  inc() {
    this.count.update((value) => value + 1);
  }
}

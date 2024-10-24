import { Component, Signal, computed, signal, effect } from '@angular/core';
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

  constructor() {
    // Effect to log a message whenever the count signal changes
    effect(() => {
      console.log('Count changed: ', this.count());
    });

    // Effect to trigger some action when count reaches a specific value
    effect(() => {
      if (this.count() === 5) {
        console.log('Count reached 5!');
        this.saveCountToLocalStorage(this.count()); // Sauvegarder la valeur dans le localStorage

      }
    });
  }

  inc() {
    this.count.update((value) => value + 1);
  }

  // Méthode pour sauvegarder la valeur du compteur dans le localStorage
  saveCountToLocalStorage(value: number) {
    localStorage.setItem('count', value.toString());
  }

  // Méthode pour charger la valeur du compteur depuis le localStorage
  getCountFromLocalStorage(): number {
    const storedCount = localStorage.getItem('count');
    return storedCount !== null ? parseInt(storedCount, 10) : 0; // Retourne 0 si aucune valeur n'est stockée
  }
}

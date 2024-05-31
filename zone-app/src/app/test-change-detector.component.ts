import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-test-change-detector',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h2>{{ title }}</h2>
    <h3>{{ cpt }}</h3>
    <button (click)="click1s()">1s</button>
    <button (click)="click5s()">5s</button>
  `,
})
export class TestChangeDetectorComponent {
  title = 'TestChangeDetectorComponent';
  cpt = 0;
  ref = inject(ChangeDetectorRef);

  click1s() {
    interval(1000)
      .pipe(take(10))
      .subscribe(() => this.cpt++);
  }

  click5s() {
    this.ref.detach();
    console.log('click5s');
    interval(1000)
      .pipe(take(10))
      .subscribe(() => {
        this.cpt++;

        if (this.cpt % 2 == 0) {
          this.ref.detectChanges();
        }
      });
  }
}

import { ChangeDetectorRef, Component, NgZone, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-test-zone',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h2>{{ title }}</h2>
    <h3>{{ cpt }}</h3>
    <button (click)="click1s()">1s</button>
    <button (click)="click5s()">5s</button>
  `,
})
export class TestZoneComponent {
  title = 'TestZoneComponent';
  cpt = 0;
  zone = inject(NgZone);

  click1s() {
    setInterval(() => {
      this.cpt++;
    }, 1000);
  }

  click5s() {
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        console.log(this.cpt);
        this.cpt++;
        if (this.cpt % 5 == 0) {
          this.zone.run(() => {
            this.cpt += 0;
          });
        }
      }, 1000);
    });
  }
}

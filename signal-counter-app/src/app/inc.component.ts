import { Component, Signal, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountSignalServiceService } from './count-signal-service.service';

@Component({
  selector: 'app-inc',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './inc.component.html',
  styleUrl: './app.component.css',
})
export class IncComponent {
  count = inject(CountSignalServiceService);

  inc() {
    this.count.inc();
  }


}

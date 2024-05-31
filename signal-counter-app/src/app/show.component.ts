import { Component, Signal, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountSignalServiceService } from './count-signal-service.service';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './show.component.html',
  styleUrl: './app.component.css',
})
export class ShowComponent {
  count = inject(CountSignalServiceService).count;
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestChangeDetectorComponent } from './test-change-detector.component';
import { TestZoneComponent } from './test-zone.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestChangeDetectorComponent, TestZoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'zone-app';
}

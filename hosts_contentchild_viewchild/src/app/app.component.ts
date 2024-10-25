import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HostParentComponent } from "./tp_host/host-parent/host-parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HostParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hosts_contentchild_viewchild';
}

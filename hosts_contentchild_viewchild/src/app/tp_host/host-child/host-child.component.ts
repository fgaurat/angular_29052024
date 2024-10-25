import { Component, Host } from '@angular/core';
import { HostParentComponent } from '../host-parent/host-parent.component';

@Component({
  selector: 'app-host-child',
  standalone: true,
  imports: [],
  templateUrl: './host-child.component.html',
  styleUrl: './host-child.component.css'
})
export class HostChildComponent {
  constructor(@Host() public parentComponent: HostParentComponent) {}

}

import { Component } from '@angular/core';
import { dummyTrafficData } from '../../dummyTrafficData';

@Component({
  selector: 'app-traffic',
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css',
})
export class TrafficComponent {
  dummyTrafficData = dummyTrafficData;
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
}

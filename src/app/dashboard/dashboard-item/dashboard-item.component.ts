import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  host: {
    class: 'dashboard-item',
  },
})
export class DashboardItemComponent {
  // @Input({ required: true }) image!: { src: string; alt: string };
  // @Input({ required: true }) title!: string;
  // ? when we use input function actually this is a input signal and we must when we use it we have to set () to property.
  image = input.required<{ src: string; alt: string }>();
  title = input.required<string>();
}

import { Component } from '@angular/core';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  imports: [TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {}

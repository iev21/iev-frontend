// events.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  events: { name: string, date: string, location: string, rsvp: boolean }[] = [
    { name: 'Small Business Meet Up', date: 'tis 09 march', location: 'Mountain view', rsvp: false },
    { name: 'City Networking Event', date: 'tis 03 april', location: 'Flat iron district', rsvp: false },
    { name: 'Sun Roof Party', date: 'tis 06 feb', location: 'West village', rsvp: false }
  ];

  // Method to handle RSVP submission
  submitRSVP(event: { name: string, date: string, location: string, rsvp: boolean }): void {
    // Implement the functionality to handle RSVP submission here
    // For demonstration, we're just logging the event details
    console.log('RSVP submitted for:', event);
  }
}


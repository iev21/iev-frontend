import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events: any[] = [
    { 
      title: 'Event 1', 
      date: new Date(2024, 3, 30),
      location: 'Location 1',
      description: 'Description of Event 1'
    },
    { 
      title: 'Event 2', 
      date: new Date(2024, 4, 15),
      location: 'Location 2',
      description: 'Description of Event 2'
    },
    // Add more events as needed
  ];

  registerForEvent(event: any): void {
    // Add your registration logic here
    console.log('Registered for event:', event);
  }
}

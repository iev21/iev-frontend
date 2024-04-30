import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  events = [
    { title: 'Small Business Meet Up', date: 'Tue, 09 March', location: 'Mountain View' },
    { title: 'City Networking Event', date: 'Sat, 03 April', location: 'Flat Iron District' },
    { title: 'Sun Roof Party', date: 'Fri, 06 February', location: 'West Village' }
  ];

  showRegistrationModal: boolean = false;
  selectedEvent: any;

  openRegistrationModal(event: any): void {
    this.selectedEvent = event;
    this.showRegistrationModal = true;
  }

  closeRegistrationModal(): void {
    this.showRegistrationModal = false;
    // Reset any form fields if needed
  }
}

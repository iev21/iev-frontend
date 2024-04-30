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
  registrationData: any = {};

  openRegistrationModal(event: any): void {
    this.selectedEvent = event;
    this.showRegistrationModal = true;
  }

  closeRegistrationModal(): void {
    this.showRegistrationModal = false;
    this.clearRegistrationData();
  }

  registerForEvent(): void {
    // Implement your logic to handle event registration here
    console.log('Registration Data:', this.registrationData);
    // Close the modal after submitting registration
    this.closeRegistrationModal();
  }

  clearRegistrationData(): void {
    // Reset the registration form data
    this.registrationData = {};
  }
}

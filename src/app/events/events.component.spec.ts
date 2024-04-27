import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  events = [
    { title: 'Small Business Meet Up', date: new Date('2024-03-09'), location: 'Mountain View' },
    // Add more events as needed
  ];
  showRSVPForm = false;
  selectedEvent: any;
  rsvpName: string = '';
  rsvpEmail: string = '';
  rsvpPhone: string = '';

  openModal(event: any) {
    this.showRSVPForm = true;
    this.selectedEvent = event;
  }

  closeModal() {
    this.showRSVPForm = false;
    this.resetForm();
  }

  resetForm() {
    this.rsvpName = '';
    this.rsvpEmail = '';
    this.rsvpPhone = '';
  }

  submitRSVP() {
    // Here you can implement logic to handle RSVP submission, e.g., send data to server
    console.log('RSVP submitted:');
    console.log('Name:', this.rsvpName);
    console.log('Email:', this.rsvpEmail);
    console.log('Phone:', this.rsvpPhone);
    
    // After submission, close the modal and reset form
    this.closeModal();
  }
}

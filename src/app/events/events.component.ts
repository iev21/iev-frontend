import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  animations: [
    trigger('rollIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ])
    ])
  ]
})
export class EventsComponent {
  events = [
    { title: 'Event 1' },
    { title: 'Event 2' },
    { title: 'Event 3' },
    // Add more events as needed
  ];
}

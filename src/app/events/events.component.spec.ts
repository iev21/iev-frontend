import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsComponent } from './events.component';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Add more test cases as needed
});


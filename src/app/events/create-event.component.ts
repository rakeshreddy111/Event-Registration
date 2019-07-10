import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
  templateUrl: './create-event.component.html'
})
export class CreateEventComponent {
  newEvent;
  isDirty: boolean = true;
  constructor(private router: Router, private eventService: EventService) {}

  cancel() {
    this.router.navigate(['\events']);
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['\events']);
  }
}

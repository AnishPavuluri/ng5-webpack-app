import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Event } from "../models/event";
import { SyneEventsService } from "../services/syne-events.service";


@Component({
    selector: 'new-event',
    templateUrl: '../views/new-event.component.html'
})
export class NewEventComponent implements OnInit {
    constructor(private _eventsService: SyneEventsService, private _router: Router) {

    }
    event: Event = new Event();
    pageTitle: string = "New Event Registration Form";
    ngOnInit() {
    }
    registerNewEvent(): void {
        this.event.logo = "images/noimage.png";
        this._eventsService.registerNewEvent(this.event).subscribe(
            data => this._router.navigate(["/events"]),
            error => console.log(error),
            () => console.log("Service call completed!")
        );
    }
}
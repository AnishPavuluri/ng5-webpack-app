import { Component, OnInit } from '@angular/core';

import { Event } from '../models/event';
import { SyneEventsService } from "../services/syne-events.service";

@Component({
    selector: 'events-list',
    templateUrl: '../views/events-list.component.html'
})
export class EventsListComponent implements OnInit {
    constructor(private _syneEventsService: SyneEventsService) {

    }
    ngOnInit(): void {
        this._syneEventsService.getAllEvents().subscribe(
            data => this.eventsData = data,
            err => console.log(err),
            () => console.log("Service Call Complemented!")
        )
    }
    pageTitle: string = "Anish Technologies's Upcomming Events List";
    subTitle: string = "Published by Anish Technologies HR Training Department!";
    eventsData: Event[] = [];
    selectedEvent: Event;
    showEventDetails(event: Event): void {
        this.selectedEvent = event;
    }
}
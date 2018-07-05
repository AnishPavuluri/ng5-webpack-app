import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


import { Event } from '../models/event';
import { SyneEventsService } from "../services/syne-events.service";


@Component({
    selector: 'event-details',
    templateUrl: '../views/event-details.component.html'
})
export class EventDetailsComponent implements OnInit  {
    constructor(private _syneEventsService: SyneEventsService, private _activatedRoute: ActivatedRoute) {

    }
    ngOnInit(): void {
        this._syneEventsService.getSingleEvent(Number(this._activatedRoute.snapshot.paramMap.get("eid"))).subscribe(
            data => this.event = data,
            err => console.log(err),
            () => console.log("Service call completed!")
        );
    }
    event: Event = new Event();
    // @Input('currentEventId') eventId: number;
}
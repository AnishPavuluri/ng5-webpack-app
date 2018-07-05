import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { EventsListComponent } from "./components/events-list.component";
import { EventDetailsComponent } from "./components/event-details.component";
import { NewEventComponent } from "./components/new-event.component";

import { CapitalCasePipe } from "./pipes/captial-case.pipe";
import { SearchEventsPipe } from "./pipes/search-events.pipe";

import { SyneEventsService } from "./services/syne-events.service";

@NgModule({
    imports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
    exports: [EventsListComponent],
    declarations: [EventsListComponent, EventDetailsComponent, CapitalCasePipe, SearchEventsPipe, NewEventComponent],
    providers: [SyneEventsService],
})
export class EventsModule { }

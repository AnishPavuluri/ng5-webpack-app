import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Event } from "../models/event";

@Injectable()
export class SyneEventsService {
    constructor(private _httpClient: HttpClient) {

    }
    getAllEvents(): Observable<Event[]> {
        return this._httpClient.get<Event[]>("http://localhost:2018/spring-boot-rest/events");
    }
    getSingleEvent(id: number): Observable<Event> {
        return this._httpClient.get<Event>("http://localhost:2018/spring-boot-rest/events/" + id);
    }
    registerNewEvent(event: Event): Observable<string> {
        return this._httpClient.post<string>("http://localhost:2018/spring-boot-rest/events", event);
    }
}
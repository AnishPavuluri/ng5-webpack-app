import { Pipe, PipeTransform } from "@angular/core";

import { Event } from "../models/event";

@Pipe({
    name: 'searchEvents'
})
export class SearchEventsPipe implements PipeTransform {
    transform(value: Event[], ...args: any[]): Event[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((event: Event) =>
            event.eventName.toLocaleLowerCase().indexOf(filter) != -1) : value

    }
}
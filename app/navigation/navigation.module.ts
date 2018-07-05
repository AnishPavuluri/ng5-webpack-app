import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { EventsMenuComponent } from './components/events-menu.component';


@NgModule({
    imports: [CommonModule,RouterModule],
    exports: [EventsMenuComponent],
    declarations: [EventsMenuComponent]
})
export class NavigationModule { }

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SyneHomeComponent } from "./home/components/syne-home.component";
import { EventsListComponent } from "./events/components/events-list.component";
import { EmployeeListComponent } from "./employees/components/employees-list.component";
import { EventDetailsComponent } from "./events/components/event-details.component";
import { NewEventComponent } from "./events/components/new-event.component";


const appRouteConfig: Routes = [
    {
        path: 'home',
        component: SyneHomeComponent
    },
    {
        path: 'events',
        component: EventsListComponent
    },
    {
        path: 'events/new',
        component: NewEventComponent
    },
    {
        path:'events/:eid',
        component:EventDetailsComponent
    },
    {
        path: 'employees',
        component: EmployeeListComponent
    },
    {
        path:'',
        component:SyneHomeComponent
    },
    {
        path:'**',
        redirectTo:'/home',
        pathMatch:'full'
    }
];

export const appRouting:ModuleWithProviders=RouterModule.forRoot(appRouteConfig);
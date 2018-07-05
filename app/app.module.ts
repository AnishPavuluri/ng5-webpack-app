import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { appRouting } from "./app.routes";

import { EmployeesModule } from "./employees/employees.module";
import { EventsModule } from "./events/events.module";
import { HomeModule } from "./home/home.module";
import { NavigationModule } from "./navigation/navigation.module";

//Components
import { AppComponent } from "./app.component";



@NgModule({
    imports: [BrowserModule, EmployeesModule, EventsModule, HomeModule, NavigationModule, appRouting],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
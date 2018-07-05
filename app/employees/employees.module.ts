import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
//Components
import { EmployeeListComponent } from "./components/employees-list.component";
import { EmployeeDetailsComponent } from "./components/employee-details.component";


@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [EmployeeListComponent],
    declarations: [EmployeeListComponent, EmployeeDetailsComponent],
    providers: []
})
export class EmployeesModule {

}
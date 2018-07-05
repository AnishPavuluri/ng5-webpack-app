import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Employee } from "../models/employee";

@Component({
    selector: 'employee-details',
    templateUrl: '../views/employee-details.component.html'
})
export class EmployeeDetailsComponent {
    title: string = "Details of - ";
    imageW: string = "100px";
    imageH: string = "100px";
    @Input() receivedEmployee: Employee;
    //Custom Event
    @Output() sendNotification: EventEmitter<string> = new EventEmitter<string>();
    raiseEvent():void{
        this.sendNotification.emit(`Employee Name ${this.receivedEmployee.employeeName}`);
    }
}